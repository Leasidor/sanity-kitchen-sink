export default {
  widgets: [
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
                  buildHookId: '610d6a08fef152dce9b64323',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-dq4yzm28',
                  apiId: 'f8c852c0-5ccb-4f82-abd0-7f412e7b0a85'
                },
                {
                  buildHookId: '610d6a08b5d12cead95f5c93',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-561c8wmw',
                  apiId: '44adc64f-9a66-4a55-9dbb-8502dfde6e9f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Leasidor/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-561c8wmw.netlify.app', category: 'apps'}
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
