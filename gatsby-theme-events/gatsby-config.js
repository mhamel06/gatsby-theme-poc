module.exports = ({contentPath = 'data', basePath = '/'}) => ({
    plugins: [
        'gatsby-plugin-theme-ui',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                path: contentPath
            }
        },
        {
            resolve: 'gatsby-transformer-yaml',
            options: {
                typeName: 'Event'
            }
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `GatsbyJS`,
                short_name: `GatsbyJS`,
                start_url: `/`,
                background_color: `#6b37bf`,
                theme_color: `#6b37bf`,
                // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
                // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
                display: `standalone`,
                icon: `src/images/icon.svg`, // This path is relative to the root of the site.

            },
        },
        `gatsby-plugin-offline`,

    ]
});