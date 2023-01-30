import img from '../assets/img/foto_minha.jpg';

export function loadLists() {
  return [
    { 
      title: 'Tarefas', 
      creatable: true,
      cards: [
        {
          id: 1,
          content: 'Estudar React JS',
          labels: ['#7159c1'],
          user: img
        },
        {
          id: 2,
          content: 'Terminar tela dashboard rotulare',
          labels: ['#7159c1'],
          user: ''
        },
      ]
    },
    { 
      title: 'Fazendo', 
      creatable: false,
      cards: [
        {
          id: 3,
          content: 'Dizer obrigado!',
          labels: ['#ff0000'],
          user: img
        }
      ]
    },
    { 
      title: 'Pausado', 
      creatable: false,
      cards: [
        {
          id: 4,
          content: 'Terminar de ler dias perfeitos',
          labels: ['#7159c1'],
          user: ''
        }
      ]
    },
    { 
      title: 'Concluído', 
      creatable: false,
      done: true,
      cards: [
        {
          id: 5,
          content: 'Stalker?',
          labels: [],
        }
      ]
    },
  ];
}