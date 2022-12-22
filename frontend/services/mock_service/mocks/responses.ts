/*
 * NOTE: This is an example of how to define data for your mock responses.
 * Be sure to copy this file into `../mocks` and only edit that copy!
 * Also please check the README for how to use the mock service :)
 */

const count = {
  targets_count: 1,
  targets_online: 0,
  targets_offline: 1,
  targets_missing_in_action: 0,
};

// MDM TODO: Remove mock when backend is merged
const mdmApple = {
  common_name: "Mock backend response APSP:04b46ce0-xxxx-xxxx-xxxx-xxxxxxxx",
  serial_number: "Mock backend response 123938388712",
  issuer:
    "Mock backend response Apple Application Integration 2 Certification Authority",
  renew_date: "2023-09-30T00:00:00Z",
};

// MDM TODO: Remove mock when backend is merged
const mdmAppleBm = {
  default_team: "Mock backend response Apples",
  apple_id: "Mock backend response test@example.com",
  organization_name: "Mock backend response Fleet Device Management",
  mdm_server_url: "Mock backend response https://fleet.organization.com/mdm",
  renew_date: "2023-09-30T00:00:00Z",
};

const hosts = {
  hosts: [
    {
      created_at: "2022-04-03T17:04:09Z",
      updated_at: "2022-04-06T01:02:17Z",
      id: 416,
      detail_updated_at: "2022-04-06T01:28:28Z",
      label_updated_at: "2022-04-06T01:28:28Z",
      policy_updated_at: "2022-04-06T01:28:28Z",
      last_enrolled_at: "2022-04-03T17:04:09Z",
      seen_time: "2022-04-06T02:11:41Z",
      refetch_requested: false,
      hostname: "9b20fc72a247",
      display_name: "9b20fc72a247",
      uuid: "09b244f8-0000-0000-b5cc-791a15f11073",
      platform: "ubuntu",
      osquery_version: "4.9.0",
      os_version: "Ubuntu 18.4.0",
      build: "",
      platform_like: "debian",
      code_name: "",
      uptime: 281037000000000,
      memory: 6232231936,
      cpu_type: "x86_64",
      cpu_subtype: "158",
      cpu_brand: "Intel(R) Core(TM) i9-9880H CPU @ 2.30GHz",
      cpu_physical_cores: 8,
      cpu_logical_cores: 8,
      hardware_vendor: "",
      hardware_model: "",
      hardware_version: "",
      hardware_serial: "",
      computer_name: "9b20fc72a247",
      public_ip: "",
      primary_ip: "172.23.0.3",
      primary_mac: "02:42:ac:17:00:03",
      distributed_interval: 10,
      config_tls_refresh: 10,
      logger_tls_period: 10,
      team_id: null,
      pack_stats: null,
      team_name: null,
      gigs_disk_space_available: 42.11,
      percent_disk_space_available: 67,
      issues: {
        total_issues_count: 0,
        failing_policies_count: 0,
      },
      status: "offline",
      display_text: "9b20fc72a247",
    },
    {
      created_at: "2022-04-03T17:04:09Z",
      updated_at: "2022-04-06T01:02:17Z",
      id: 415,
      detail_updated_at: "2022-04-06T01:28:29Z",
      label_updated_at: "2022-04-06T01:28:29Z",
      policy_updated_at: "2022-04-06T01:28:29Z",
      last_enrolled_at: "2022-04-03T17:04:09Z",
      seen_time: "2022-04-06T02:11:41Z",
      refetch_requested: false,
      hostname: "deea0b65655e",
      display_name: "deea0b65655e",
      uuid: "09b244f8-0000-0000-b5cc-791a15f11073",
      platform: "rhel",
      osquery_version: "4.9.0",
      os_version: "CentOS 6.10.0",
      build: "",
      platform_like: "rhel",
      code_name: "",
      uptime: 281038000000000,
      memory: 6232231936,
      cpu_type: "x86_64",
      cpu_subtype: "158",
      cpu_brand: "Intel(R) Core(TM) i9-9880H CPU @ 2.30GHz",
      cpu_physical_cores: 8,
      cpu_logical_cores: 8,
      hardware_vendor: "",
      hardware_model: "",
      hardware_version: "",
      hardware_serial: "",
      computer_name: "deea0b65655e",
      public_ip: "",
      primary_ip: "172.23.0.4",
      primary_mac: "02:42:ac:17:00:04",
      distributed_interval: 10,
      config_tls_refresh: 10,
      logger_tls_period: 10,
      team_id: null,
      pack_stats: null,
      team_name: null,
      gigs_disk_space_available: 42.11,
      percent_disk_space_available: 67,
      issues: {
        total_issues_count: 0,
        failing_policies_count: 0,
      },
      status: "offline",
      display_text: "deea0b65655e",
    },
    {
      created_at: "2022-04-03T17:04:09Z",
      updated_at: "2022-04-06T01:31:32Z",
      id: 414,
      detail_updated_at: "2022-04-06T01:42:49Z",
      label_updated_at: "2022-04-06T01:42:49Z",
      policy_updated_at: "2022-04-06T01:42:49Z",
      last_enrolled_at: "2022-04-03T17:04:09Z",
      seen_time: "2022-04-06T02:11:41Z",
      refetch_requested: false,
      hostname: "32a9e72af157",
      display_name: "32a9e72af157",
      uuid: "09b244f8-0000-0000-b5cc-791a15f11073",
      platform: "ubuntu",
      osquery_version: "4.9.0",
      os_version: "Ubuntu 16.4.0",
      build: "",
      platform_like: "debian",
      code_name: "",
      uptime: 281107000000000,
      memory: 6232231936,
      cpu_type: "x86_64",
      cpu_subtype: "158",
      cpu_brand: "Intel(R) Core(TM) i9-9880H CPU @ 2.30GHz",
      cpu_physical_cores: 8,
      cpu_logical_cores: 8,
      hardware_vendor: "",
      hardware_model: "",
      hardware_version: "",
      hardware_serial: "",
      computer_name: "32a9e72af157",
      public_ip: "",
      primary_ip: "172.23.0.8",
      primary_mac: "02:42:ac:17:00:08",
      distributed_interval: 10,
      config_tls_refresh: 10,
      logger_tls_period: 10,
      team_id: null,
      pack_stats: null,
      team_name: null,
      gigs_disk_space_available: 42.11,
      percent_disk_space_available: 67,
      issues: {
        total_issues_count: 0,
        failing_policies_count: 0,
      },
      status: "offline",
      display_text: "32a9e72af157",
    },
    {
      created_at: "2022-04-03T17:04:09Z",
      updated_at: "2022-04-06T01:31:32Z",
      id: 413,
      detail_updated_at: "2022-04-06T01:42:49Z",
      label_updated_at: "2022-04-06T01:42:49Z",
      policy_updated_at: "2022-04-06T01:42:49Z",
      last_enrolled_at: "2022-04-03T17:04:09Z",
      seen_time: "2022-04-06T02:11:41Z",
      refetch_requested: false,
      hostname: "2cce6480edef",
      display_name: "2cce6480edef",
      uuid: "09b244f8-0000-0000-b5cc-791a15f11073",
      platform: "rhel",
      osquery_version: "4.9.0",
      os_version: "CentOS Linux 7.9.2009",
      build: "",
      platform_like: "rhel",
      code_name: "",
      uptime: 281107000000000,
      memory: 6232231936,
      cpu_type: "x86_64",
      cpu_subtype: "158",
      cpu_brand: "Intel(R) Core(TM) i9-9880H CPU @ 2.30GHz",
      cpu_physical_cores: 8,
      cpu_logical_cores: 8,
      hardware_vendor: "",
      hardware_model: "",
      hardware_version: "",
      hardware_serial: "",
      computer_name: "2cce6480edef",
      public_ip: "",
      primary_ip: "172.23.0.7",
      primary_mac: "02:42:ac:17:00:07",
      distributed_interval: 10,
      config_tls_refresh: 10,
      logger_tls_period: 10,
      team_id: null,
      pack_stats: null,
      team_name: null,
      gigs_disk_space_available: 42.11,
      percent_disk_space_available: 67,
      issues: {
        total_issues_count: 0,
        failing_policies_count: 0,
      },
      status: "offline",
      display_text: "2cce6480edef",
    },
    {
      created_at: "2022-04-03T17:04:09Z",
      updated_at: "2022-04-06T01:31:32Z",
      id: 412,
      detail_updated_at: "2022-04-06T01:42:49Z",
      label_updated_at: "2022-04-06T01:42:49Z",
      policy_updated_at: "2022-04-06T01:42:49Z",
      last_enrolled_at: "2022-04-03T17:04:09Z",
      seen_time: "2022-04-06T02:10:56Z",
      refetch_requested: false,
      hostname: "9846bcd4aea5",
      display_name: "9846bcd4aea5",
      uuid: "09b244f8-0000-0000-b5cc-791a15f11073",
      platform: "ubuntu",
      osquery_version: "4.9.0",
      os_version: "Ubuntu 20.4.0",
      build: "",
      platform_like: "debian",
      code_name: "",
      uptime: 281107000000000,
      memory: 6232231936,
      cpu_type: "x86_64",
      cpu_subtype: "158",
      cpu_brand: "Intel(R) Core(TM) i9-9880H CPU @ 2.30GHz",
      cpu_physical_cores: 8,
      cpu_logical_cores: 8,
      hardware_vendor: "",
      hardware_model: "",
      hardware_version: "",
      hardware_serial: "",
      computer_name: "9846bcd4aea5",
      public_ip: "",
      primary_ip: "172.23.0.2",
      primary_mac: "02:42:ac:17:00:02",
      distributed_interval: 10,
      config_tls_refresh: 10,
      logger_tls_period: 10,
      team_id: null,
      pack_stats: null,
      team_name: null,
      gigs_disk_space_available: 42.11,
      percent_disk_space_available: 67,
      issues: {
        total_issues_count: 0,
        failing_policies_count: 0,
      },
      status: "offline",
      display_text: "9846bcd4aea5",
    },
    {
      created_at: "2022-04-03T17:04:09Z",
      updated_at: "2022-04-06T01:31:32Z",
      id: 411,
      detail_updated_at: "2022-04-06T01:42:49Z",
      label_updated_at: "2022-04-06T01:42:49Z",
      policy_updated_at: "2022-04-06T01:42:49Z",
      last_enrolled_at: "2022-04-03T17:04:09Z",
      seen_time: "2022-04-06T02:11:41Z",
      refetch_requested: false,
      hostname: "a6ab9437a891",
      display_name: "a6ab9437a891",
      uuid: "09b244f8-0000-0000-b5cc-791a15f11073",
      platform: "rhel",
      osquery_version: "4.9.0",
      os_version: "CentOS Linux 8.3.2011",
      build: "",
      platform_like: "rhel",
      code_name: "",
      uptime: 281107000000000,
      memory: 6232231936,
      cpu_type: "x86_64",
      cpu_subtype: "158",
      cpu_brand: "Intel(R) Core(TM) i9-9880H CPU @ 2.30GHz",
      cpu_physical_cores: 8,
      cpu_logical_cores: 8,
      hardware_vendor: "",
      hardware_model: "",
      hardware_version: "",
      hardware_serial: "",
      computer_name: "a6ab9437a891",
      public_ip: "",
      primary_ip: "172.23.0.5",
      primary_mac: "02:42:ac:17:00:05",
      distributed_interval: 10,
      config_tls_refresh: 10,
      logger_tls_period: 10,
      team_id: null,
      pack_stats: null,
      team_name: null,
      gigs_disk_space_available: 42.11,
      percent_disk_space_available: 67,
      issues: {
        total_issues_count: 0,
        failing_policies_count: 0,
      },
      status: "offline",
      display_text: "a6ab9437a891",
    },
  ],
};

const labels = {
  labels: [
    {
      id: 6,
      name: "All Hosts",
      platform: "",
      label_type: "builtin",
      display_text: "All Hosts",
    },
    {
      id: 7,
      name: "macOS",
      platform: "",
      label_type: "builtin",
      display_text: "macOS",
    },
    {
      id: 8,
      name: "Ubuntu Linux",
      platform: "",
      label_type: "builtin",
      display_text: "Ubuntu Linux",
    },
    {
      id: 9,
      name: "CentOS Linux",
      platform: "",
      label_type: "builtin",
      display_text: "CentOS Linux",
    },
    {
      id: 10,
      name: "MS Windows",
      platform: "",
      label_type: "builtin",
      display_text: "MS Windows",
    },
    {
      id: 11,
      name: "Red Hat Linux",
      platform: "",
      label_type: "builtin",
      display_text: "Red Hat Linux",
    },
    {
      id: 12,
      name: "All Linux",
      platform: "",
      label_type: "builtin",
      display_text: "All Linux",
    },
  ],
};

export default {
  count,
  hosts,
  labels,
  mdmApple,
  mdmAppleBm,
};
