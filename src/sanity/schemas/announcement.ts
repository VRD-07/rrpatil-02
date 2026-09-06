export const announcement = {
  name: 'announcement',
  title: 'Announcement',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required().error('Title is required'),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule: any) => Rule.required().error('Description is required'),
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'alt',
              title: 'Alternative Text',
              type: 'string',
              validation: (Rule: any) =>
                Rule.required().error('Alternative text is required for accessibility'),
            },
          ],
        },
      ],
      validation: (Rule: any) =>
        Rule.required()
          .min(1)
          .max(8)
          .error('Announcement must have between 1 and 8 images'),
    },
    {
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    },
    {
      name: 'isActive',
      title: 'Is Active',
      type: 'boolean',
      description: 'Allows editors to hide an announcement without deleting it',
      initialValue: true,
    },
  ],
};

export default announcement;
