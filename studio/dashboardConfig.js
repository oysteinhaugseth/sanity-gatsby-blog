export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5cfd64838952d71a001efaac',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-8y73rhyz',
                  apiId: '3a950213-e8fc-4682-80cf-3a3114a35beb'
                },
                {
                  buildHookId: '5cfd6484472c92153e8101fa',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-otpptpzm',
                  apiId: 'f431f51a-b152-45d7-96b2-e83d2adb6fea'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/oysteinhaugseth/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-otpptpzm.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
