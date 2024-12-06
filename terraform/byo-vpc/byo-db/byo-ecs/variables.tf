variable "ecs_cluster" {
  type        = string
  description = "The name of the ECS cluster to use"
  nullable    = false
}

variable "vpc_id" {
  type    = string
  default = null
}

variable "fleet_config" {
  type = object({
    mem                          = optional(number, 4096)
    cpu                          = optional(number, 512)
    image                        = optional(string, "fleetdm/fleet:v4.44.0")
    docker_token_arn             = string
    family                       = optional(string, "fleet")
    sidecars                     = optional(list(any), [])
    depends_on                   = optional(list(any), [])
    mount_points                 = optional(list(any), [])
    volumes                      = optional(list(any), [])
    extra_environment_variables  = optional(map(string), {})
    extra_iam_policies           = optional(list(string), [])
    extra_execution_iam_policies = optional(list(string), [])
    extra_secrets                = optional(map(string), {})
    security_groups              = optional(list(string), null)
    security_group_name          = optional(string, "fleet")
    iam_role_arn                 = optional(string, null)
    service = optional(object({
      name = optional(string, "fleet")
      }), {
      name = "fleet"
    })
    database = object({
      password_secret_arn = string
      user                = string
      database            = string
      address             = string
      rr_address          = optional(string, null)
    })
    redis = object({
      address = string
      use_tls = optional(bool, true)
    })
    awslogs = optional(object({
      name      = optional(string, null)
      region    = optional(string, null)
      create    = optional(bool, true)
      prefix    = optional(string, "fleet")
      retention = optional(number, 5)
      }), {
      name      = null
      region    = null
      prefix    = "fleet"
      retention = 5
    })
    loadbalancer = object({
      arn = string
    })
    extra_load_balancers = optional(list(any), [])
    networking = object({
      subnets         = list(string)
      security_groups = optional(list(string), null)
    })
    autoscaling = optional(object({
      max_capacity                 = optional(number, 5)
      min_capacity                 = optional(number, 1)
      memory_tracking_target_value = optional(number, 80)
      cpu_tracking_target_value    = optional(number, 80)
      }), {
      max_capacity                 = 5
      min_capacity                 = 1
      memory_tracking_target_value = 80
      cpu_tracking_target_value    = 80
    })
    iam = optional(object({
      role = optional(object({
        name        = optional(string, "fleet-role")
        policy_name = optional(string, "fleet-iam-policy")
        }), {
        name        = "fleet-role"
        policy_name = "fleet-iam-policy"
      })
      execution = optional(object({
        name        = optional(string, "fleet-execution-role")
        policy_name = optional(string, "fleet-execution-role")
        }), {
        name        = "fleet-execution-role"
        policy_name = "fleet-iam-policy-execution"
      })
      }), {
      name = "fleetdm-execution-role"
    })
  })
  default = {
    mem                          = 512
    cpu                          = 256
    image                        = "fleetdm/fleet:v4.31.1"
    docker_token_arn             = null
    family                       = "fleet"
    sidecars                     = []
    depends_on                   = []
    mount_points                 = []
    volumes                      = []
    extra_environment_variables  = {}
    extra_iam_policies           = []
    extra_execution_iam_policies = []
    extra_secrets                = {}
    security_groups              = null
    security_group_name          = "fleet"
    iam_role_arn                 = null
    service = {
      name = "fleet"
    }
    database = {
      password_secret_arn = null
      user                = null
      database            = null
      address             = null
      rr_address          = null
    }
    redis = {
      address = null
      use_tls = true
    }
    awslogs = {
      name      = null
      region    = null
      create    = true
      prefix    = "fleet"
      retention = 5
    }
    loadbalancer = {
      arn = null
    }
    extra_load_balacners = []
    networking = {
      subnets         = null
      security_groups = null
    }
    autoscaling = {
      max_capacity                 = 5
      min_capacity                 = 1
      memory_tracking_target_value = 80
      cpu_tracking_target_value    = 80
    }
    iam = {
      role = {
        name        = "fleet-role"
        policy_name = "fleet-iam-policy"
      }
      execution = {
        name        = "fleet-execution-role"
        policy_name = "fleet-iam-policy-execution"
      }
    }
  }
  description = "The configuration object for Fleet itself. Fields that default to null will have their respective resources created if not specified."
  nullable    = false
}

variable "migration_config" {
  type = object({
    mem = number
    cpu = number
  })
  default = {
    mem = 2048
    cpu = 1024
  }
  description = "The configuration object for Fleet's migration task."
  nullable    = false
}

variable "s3_bucket_config" {
  type = object({
    name          = string
    software_path = string
  })
  description = "S3 bucket configuration to manage fleet software packages"
}
variable "redis_sidecar_config" {
  type = object({
    name              = optional(string, "redis")
    image             = optional(string, "redis:latest")
    essential         = optional(bool, true)
    cpu               = optional(number, 128)
    memory            = optional(number, 256)
    memoryReservation = optional(number, 128)
    environment       = optional(list(any), [])
    portMappings = optional(list(any), [{
      containerPort = 6379
      protocol      = "tcp"
    }])
  })
  default     = {}
  description = "Redis ECS task container configuration. It is used as a sidecar container in the fleet ECS task"
}

variable "enable_redis_sidecar" {
  type        = bool
  default     = true
  description = "Use a Redis sidecar container within the fleet RDS task. This is done to lower cost of multiple ElastiCache instances."
}

variable "twingate_security_group" {
  type        = string
  default     = "tg-fleet-just-ara"
  description = "Twinwgate connector security group allowed to connect to Redis in the ECS task"
}

variable "enable_datadog_agent" {
  type        = bool
  default     = true
  description = "Enable datadog agent as container sidecar to collect fleet observability data"
}

variable "datadog_agent_sidecar_config" {
  type = object({
    name              = optional(string, "datadog-agent")
    image             = optional(string, "public.ecr.aws/datadog/agent:latest")
    essential         = optional(bool, true)
    cpu               = optional(number)
    memory            = optional(number)
    memoryReservation = optional(number)
    environment       = optional(map(string), {})
    secrets           = optional(map(string), {})
    portMappings      = optional(list(any), [])
  })
  default     = {}
  description = "Datadog agent ECS task container configuration. It is used as a sidecar container in the fleet ECS task to collect observability data"
}

variable "datadog_api_aws_secret_manager_key" {
  type        = string
  default     = "INFRASTRUCTURE_DATADOG_API_KEY"
  description = "AWS Secret Manager key to locate the Datadog API key"
}

variable "company_id" {
  type        = string
  default     = null
  description = "Fleet Company ID"
}
