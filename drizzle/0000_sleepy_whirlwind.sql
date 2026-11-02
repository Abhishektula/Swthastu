CREATE TABLE `enquiries` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`email` text NOT NULL,
	`interest` text NOT NULL,
	`preferred_date` text,
	`timezone` text,
	`message` text,
	`status` text DEFAULT 'requested' NOT NULL,
	`created_at` text NOT NULL
);
