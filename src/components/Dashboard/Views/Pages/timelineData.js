export default {

  weeks: [{week: 1, status: 'error'}, {week: 6, status: 'success'}, {week: 8, status: 'finish'}],
  medicale: [
    {
      week: 1,
      name: 'Screening boli metabolice',
      required: false,
      description: 'Screening boli metabolice care trebuie facut in prima saptamana',
      notes: '',
      files: [],
      done: false,
      date: ''
    },
    {
      week: 1,
      name: 'BCG (vaccin anti-tuberculoza)',
      required: true,
      description: 'BCG(vaccin anti-tuberculoza)',
      notes: '',
      files: [],
      done: false,
      date: ''
    },
    {
      week: 1,
      name: 'EUVAX(vaccin anti-hepatita B)',
      required: true,
      description: 'EUVAX(vaccin anti-hepatita B)',
      notes: 'Am facut vaccina in Cluj la spitalul public',
      files: [],
      done: true,
      date: ''
    },
    {
      week: 1,
      name: 'Screening oftalmologic',
      required: true,
      description: 'Screening oftalmologic care trebuie facut in prima saptamana',
      notes: '',
      files: [],
      done: true,
      date: ''
    },
    {
      week: 6,
      name: 'Bilirubina',
      required: false,
      description: 'Bilirubina care trebuie facut in a 2-a saptamana',
      notes: '',
      files: [],
      done: true,
      date: ''
    }
  ],
  weeksDezvoltare: [{week: 4, status: 'success'}, {week: 8, status: 'finish'}, {week: 12, status: 'finish'}],
  dezvoltare: [
    {
      week: 4,
      name: 'tresare la zgomote puternice',
      required: false,
      description: 'tresare la zgomote puternice',
      notes: '',
      files: [],
      done: false,
      date: ''
    },
    {
      week: 4,
      name: 'Se linisteste cand e mangaiat',
      required: false,
      description: 'Se linisteste cand e mangaiat',
      notes: '',
      files: [],
      done: false,
      date: ''
    },
    {
      week: 4,
      name: 'Privește fata părinților pt scurt timp',
      required: false,
      description: 'Privește fata părinților pt scurt timp',
      notes: 'Se uita gingas si la mami si la tati',
      files: [{
        name: 'privire.jpeg',
        url: 'https://assets.babycenter.com/ims/2016/10/iStock_43693432_4x3.jpg'
      }],
      done: true,
      date: new Date()
    },
    {
      week: 4,
      name: 'Tine mâna in pumn',
      required: false,
      description: 'Tine mâna in pumn',
      notes: '',
      files: [],
      done: false,
      date: ''
    },
    {
      week: 8,
      name: 'Reactioneaza la sunete',
      required: false,
      description: 'Reactioneaza la sunete',
      notes: '',
      files: [],
      done: false,
      date: ''
    }
  ]

}
