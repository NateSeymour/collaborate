<template>
    <div class="admin">
        <div class="sidebar-nav">
            <nav>
                <h1 class="header">Admin Console</h1>

                <h3 class="category">General</h3>
                <RouterLink to="/Admin/Dashboard">Dashboard</RouterLink>
                <RouterLink to="/Admin/ServerConfiguration">Server Configuration</RouterLink>
                <RouterLink to="/Admin/ServerStatus">Status</RouterLink>

                <h3 class="category">Plugins</h3>
                <RouterLink to="/Admin/Plugins">Manage Plugins</RouterLink>
            </nav>
        </div>
        <div class="body">
            <header>
                <input type="search">
            </header>
            <div class="content">
                <RouterView />
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
@use "@/style/common";

.admin {
    @include common.fullsize;
    display: grid;
    grid-template-columns: minmax(10em, 1fr) 3fr;

    .sidebar-nav {
        padding: 1em;
        background: var(--bg-highlight);
        display: flex;
        flex-direction: column;

        .header {
            text-align: center;
            margin-top: 1em;
            margin-bottom: 1em;
        }

        .category {
            font: 400 14px common.$font-title;
            text-decoration: none;
            color: var(--bg-text);
            margin-top: 0.75em;
            margin-bottom: 0.5em;
        }

        a {
            text-decoration: none;
            color: var(--text);
            font: 600 16px common.$font-title;
            cursor: pointer;
            width: 100%;
            display: block;
            margin-bottom: 0.2em;
            transition: 150ms;

            &:hover {
                filter: brightness(0.9);
            }
        }
    }

    .body {
        @include common.fullsize;

        .content {
            @include common.fullsize;
        }
    }
}
</style>