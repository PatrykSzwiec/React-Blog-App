const initialState = {

  posts: [
    {
      id: '1',
      title: 'Article title',
      shortDescription: 'Short description of the article...',
      content: 'Main content of the article',
      publishedDate: new Date ('2023-12-03'),
      author: 'John Doe',
      category: 'Movies'
    },

    {
      id: '2',
      title: 'Article title 2',
      shortDescription: 'Short description of the article...',
      content: 'Main content of the article',
      publishedDate: new Date ('2024-12-04'),
      author: 'John Doe',
      category: 'News'
    },

    {
      id: '3',
      title: 'Article title 3',
      shortDescription: 'Short description of the article...',
      content: 'Main content of the article',
      publishedDate: new Date ('2022-03-29'),
      author: 'John Doe',
      category: 'Sport'
    },

    {
      id: '4',
      title: 'Article title 4',
      shortDescription: 'Short description of the article...',
      content: 'Main content of the article',
      publishedDate: new Date ('2023-04-17'),
      author: 'John Doe',
      category: 'News'
    }
  ],

  categories: [
    'Sport',
    'News',
    'Movies'
  ]
}

export default initialState;