/**
 * Software source types returned by Fleet API.
 *
 * These correspond to osquery table names that collect software inventory.
 * The mdm-server should use these constants to validate Fleet package data.
 *
 * Reference: server/service/osquery_utils/queries.go
 */

// macOS software sources
export const MACOS_SOFTWARE_SOURCES = [
  "apps",
  "python_packages",
  "chrome_extensions",
  "firefox_addons",
  "safari_extensions",
  "homebrew_packages",
] as const;

// Linux software sources
export const LINUX_SOFTWARE_SOURCES = [
  "deb_packages",
  "portage_packages",
  "rpm_packages",
  "npm_packages",
  "python_packages",
  "chrome_extensions",
  "firefox_addons",
] as const;

// Windows software sources
export const WINDOWS_SOFTWARE_SOURCES = [
  "programs",
  "python_packages",
  "ie_extensions",
  "chrome_extensions",
  "firefox_addons",
  "chocolatey_packages",
] as const;

// ChromeOS software sources
export const CHROMEOS_SOFTWARE_SOURCES = ["chrome_extensions"] as const;

// Additional sources that may appear in legacy data or specific configurations
export const LEGACY_SOFTWARE_SOURCES = [
  "apt_sources",
  "yum_sources",
  "atom_packages", // Atom packages were removed from software inventory, kept for backwards compatibility
  "pkg_packages",
] as const;

/**
 * All valid software source types that Fleet API may return.
 *
 * Use this constant for Zod schema validation:
 *
 * @example
 * ```typescript
 * import { z } from 'zod';
 * import { ALL_SOFTWARE_SOURCES } from '@fleetdm/fleet/frontend/interfaces/software-sources';
 *
 * const SoftwareSourceSchema = z.enum(ALL_SOFTWARE_SOURCES);
 *
 * // Or for more flexibility, use z.string() for the source field
 * // to handle any future source types without code changes
 * const FleetSoftwareSchema = z.object({
 *   source: z.string(), // Flexible - accepts any source type
 *   // ... other fields
 * });
 * ```
 */
export const ALL_SOFTWARE_SOURCES = [
  // macOS
  "apps",
  "homebrew_packages",
  "safari_extensions",
  // Linux
  "deb_packages",
  "portage_packages",
  "rpm_packages",
  "npm_packages",
  "apt_sources",
  "yum_sources",
  "pkg_packages",
  // Windows
  "programs",
  "ie_extensions",
  "chocolatey_packages",
  // Cross-platform
  "python_packages",
  "chrome_extensions",
  "firefox_addons",
  // Legacy
  "atom_packages",
] as const;

export type SoftwareSource = (typeof ALL_SOFTWARE_SOURCES)[number];

/**
 * Human-readable display names for software source types.
 * Maps osquery table names to user-friendly labels.
 */
export const SOFTWARE_SOURCE_DISPLAY_NAMES: Record<SoftwareSource, string> = {
  apt_sources: "Package (APT)",
  deb_packages: "Package (deb)",
  portage_packages: "Package (Portage)",
  rpm_packages: "Package (RPM)",
  yum_sources: "Package (YUM)",
  npm_packages: "Package (NPM)",
  atom_packages: "Package (Atom)",
  python_packages: "Package (Python)",
  apps: "Application (macOS)",
  chrome_extensions: "Browser plugin",
  firefox_addons: "Browser plugin (Firefox)",
  safari_extensions: "Browser plugin (Safari)",
  homebrew_packages: "Package (Homebrew)",
  programs: "Program (Windows)",
  ie_extensions: "Browser plugin (IE)",
  chocolatey_packages: "Package (Chocolatey)",
  pkg_packages: "Package (pkg)",
};

/**
 * Check if a string is a valid software source type.
 * Use this for runtime validation when parsing Fleet API responses.
 */
export function isValidSoftwareSource(source: string): source is SoftwareSource {
  return ALL_SOFTWARE_SOURCES.includes(source as SoftwareSource);
}
