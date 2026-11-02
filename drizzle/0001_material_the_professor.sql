CREATE TABLE `provider_applications` (
	`id` text PRIMARY KEY NOT NULL,
	`user_id` text NOT NULL,
	`name` text NOT NULL,
	`email` text NOT NULL,
	`role` text NOT NULL,
	`specialty` text NOT NULL,
	`qualifications` text NOT NULL,
	`languages` text NOT NULL,
	`location` text NOT NULL,
	`format` text NOT NULL,
	`website` text,
	`consent_version` text NOT NULL,
	`created_at` text NOT NULL,
	`expires_at` text NOT NULL,
	`status` text DEFAULT 'pending_review' NOT NULL
);
