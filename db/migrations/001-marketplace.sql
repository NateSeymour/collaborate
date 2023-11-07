/* Initial database structure */
BEGIN;

CREATE TABLE users (
    id int GENERATED ALWAYS AS IDENTITY,

    email text NOT NULL,
    password text NOT NULL,

    first_name text,
    last_name text,

    PRIMARY KEY (id)
);

CREATE TYPE subscription_type AS ENUM ('free', 'premium');
CREATE TABLE subscriptions (
    user_id int REFERENCES users(id),
    subscription_type subscription_type NOT NULL,
    valid_until timestamp NOT NULL
);

CREATE TABLE organizations (
    id int GENERATED ALWAYS AS IDENTITY,
    name text NOT NULL,

    PRIMARY KEY (id)
);

CREATE TABLE organization_members (
    organization int REFERENCES organizations(id),
    member int REFERENCES users(id)
);

CREATE TABLE plugins (
    id int GENERATED ALWAYS AS IDENTITY,

    organization int REFERENCES organizations(id),

    version text NOT NULL,
    name text NOT NULL,
    description text NOT NULL,

    PRIMARY KEY (id)
);

CREATE TABLE plugin_dependencies (
    plugin int REFERENCES plugins(id),
    dependency int REFERENCES plugins(id)
);

CREATE TABLE plugin_relationships (
    plugin int REFERENCES plugins(id),
    relationship int REFERENCES plugins(id)
);

COMMIT;
/* Initial Values */