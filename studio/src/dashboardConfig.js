export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e972f9d0df19fffcd52d71f',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-rdpshzmj',
                  apiId: 'daa4bf50-f071-4841-a09d-d6c9373742a5'
                },
                {
                  buildHookId: '5e972f9dad55ac18ac4a99ff',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-d2ooqikq',
                  apiId: '10c939ad-1036-473b-bfc8-ec8069a4cdc2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/gavdaly/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-d2ooqikq.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
