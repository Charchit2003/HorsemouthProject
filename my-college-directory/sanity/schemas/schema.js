import blockContent from './blockContent'
import category from './category'
import post from './post'
import author from './author'

export const schema = {
  types: [
    {
      name: 'college',
      title: 'College',
      type: 'document',
      fields: [
        {
          name: 'name',
          title: 'Name',
          type: 'string',
        },
        {
          name: 'location',
          title: 'Location',
          type: 'string',
        },
        {
          name: 'description',
          title: 'Description',
          type: 'text',
        },
        {
          name: 'image',
          title: 'Image',
          type: 'image',
        },
       
        // Other fields...
      ],
    },
  ],
}
