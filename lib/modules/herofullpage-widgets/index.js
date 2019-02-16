module.exports = {
  extend: 'apostrophe-widgets',
  label: 'HeroFullPage',
  skipInitialModal: true,
    addFields: [
    {
      name: 'areaBody',
      type: 'area',
      label: 'Area',
    },
    {
      type: 'select',
      name: 'heroheight',
      label: 'Height of hero',
      choices: [
        {
        label: 'Small',
        value: 'is-small'
        },
        {
        label: 'Medium',
        value: 'is-medium'
      },
        {
          label: 'Large',
          value: 'is-large'
        },
        {
          label: 'Fullheight',
          value: 'is-fullheight'
        },
        {
          label: 'Fullheight with navbar',
          value: 'is-fullheight-with-navbar'
        }
      ]
    }
  ]
};
