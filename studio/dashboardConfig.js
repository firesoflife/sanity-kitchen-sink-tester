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
                  buildHookId: '6306a8163dce1c007dfe60b6',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-tester-studio',
                  apiId: 'fd462862-5a9c-4a82-b650-c7cebaeed848'
                },
                {
                  buildHookId: '6306a816db980a0095cbc8cf',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-tester',
                  apiId: '1b4cdda1-5747-4655-9c74-754d80068f56'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/firesoflife/sanity-kitchen-sink-tester',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-tester.netlify.app', category: 'apps'}
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
