module "ecs" {
  source      = "./byo-ecs"
  ecs_cluster = module.cluster.cluster_name
  fleet_config = merge(var.fleet_config, {
    loadbalancer = {
      arn = aws_lb_target_group.fleet[0].arn
    }
    extra_load_balancers = []

  })
  migration_config = var.migration_config
  vpc_id           = var.vpc_id
  s3_bucket_config = var.fleet_config.s3_bucket_config
}

module "cluster" {
  source  = "terraform-aws-modules/ecs/aws"
  version = "4.1.2"

  autoscaling_capacity_providers        = var.ecs_cluster.autoscaling_capacity_providers
  cluster_configuration                 = var.ecs_cluster.cluster_configuration
  cluster_name                          = var.ecs_cluster.cluster_name
  cluster_settings                      = var.ecs_cluster.cluster_settings
  create                                = var.ecs_cluster.create
  default_capacity_provider_use_fargate = var.ecs_cluster.default_capacity_provider_use_fargate
  fargate_capacity_providers            = var.ecs_cluster.fargate_capacity_providers
  tags                                  = var.ecs_cluster.tags
}

data "aws_lb" "fleet" {
  count = var.alb_name == null ? 0 : 1
  name  = var.alb_name
}

data "aws_lb_listener" "https" {
  count             = var.alb_name == null ? 0 : 1
  load_balancer_arn = data.aws_lb.fleet[0].arn
  port              = 443
}

resource "aws_lb_target_group" "fleet" {
  count    = var.alb_name == null ? 0 : 1
  name     = substr("tg-${var.ecs_cluster.cluster_name}", 0, 32)
  port     = 80
  protocol = "HTTP"
  # https://docs.aws.amazon.com/AmazonECS/latest/developerguide/alb.html
  target_type = "ip"
  vpc_id      = var.vpc_id
  health_check {
    path                = "/healthz"
    matcher             = "200"
    timeout             = 10
    interval            = 15
    healthy_threshold   = 5
    unhealthy_threshold = 5
  }
}

resource "aws_lb_listener_rule" "fleet" {
  count        = var.alb_name == null ? 0 : 1
  listener_arn = data.aws_lb_listener.https[0].arn

  condition {
    host_header {
      values = [var.domain_name]
    }
  }

  action {
    type             = "forward"
    target_group_arn = aws_lb_target_group.fleet[0].arn
  }
}
