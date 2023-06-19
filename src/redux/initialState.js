const initialState = {

  posts: [
    {
      id: '1',
      title: 'Article title',
      shortDescription: 'Short description of the article...',
      content: 'Main content of the article',
      publishedDate: new Date ('03-12-2023'),
      author: 'John Doe',
      category: 'Movies'
    },

    {
      id: '2',
      title: 'Article title 2',
      shortDescription: 'Short description of the article...',
      content: 'Main content of the article',
      publishedDate: new Date ('03-12-2023'),
      author: 'John Doe',
      category: 'News'
    },

    {
      id: '3',
      title: 'Article title 3',
      shortDescription: 'Short description of the article...',
      content: 'Main content of the article',
      publishedDate: new Date ('03-12-2023'),
      author: 'John Doe',
      category: 'Sport'
    },

    {
      id: '4',
      title: 'Article title 4',
      shortDescription: 'Short description of the article...',
      content: 'Main content of the article',
      publishedDate: new Date ('12-27-2023'),
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