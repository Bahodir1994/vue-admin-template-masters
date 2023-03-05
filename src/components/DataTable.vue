<template>
  <v-data-table
    id="virtual-scroll-table"
    class="table table-border"
    :headers="headers"
    :items="posts"
    :rows-per-page-items="[-1]"
    hide-default-footer
  >
    <template slot="items" slot-scope="props">
      <td class="text-xs-left">1</td>
      <td class="text-xs-left">{{ props.item.id }}</td>
      <td class="text-xs-left">{{ props.item.id }}</td>
      <td class="text-xs-left">{{ props.item.id }}</td>
    </template>
  </v-data-table>

</template>

<script>

const avatars = [
  'https://avataaars.io/?accessoriesType=Blank&avatarStyle=Circle&clotheColor=PastelGreen&clotheType=ShirtScoopNeck&eyeType=Wink&eyebrowType=UnibrowNatural&facialHairColor=Black&facialHairType=MoustacheMagnum&hairColor=Platinum&mouthType=Concerned&skinColor=Tanned&topType=Turban',
  'https://avataaars.io/?accessoriesType=Sunglasses&avatarStyle=Circle&clotheColor=Gray02&clotheType=ShirtScoopNeck&eyeType=EyeRoll&eyebrowType=RaisedExcited&facialHairColor=Red&facialHairType=BeardMagestic&hairColor=Red&hatColor=White&mouthType=Twinkle&skinColor=DarkBrown&topType=LongHairBun',
  'https://avataaars.io/?accessoriesType=Prescription02&avatarStyle=Circle&clotheColor=Black&clotheType=ShirtVNeck&eyeType=Surprised&eyebrowType=Angry&facialHairColor=Blonde&facialHairType=Blank&hairColor=Blonde&hatColor=PastelOrange&mouthType=Smile&skinColor=Black&topType=LongHairNotTooLong',
  'https://avataaars.io/?accessoriesType=Round&avatarStyle=Circle&clotheColor=PastelOrange&clotheType=Overall&eyeType=Close&eyebrowType=AngryNatural&facialHairColor=Blonde&facialHairType=Blank&graphicType=Pizza&hairColor=Black&hatColor=PastelBlue&mouthType=Serious&skinColor=Light&topType=LongHairBigHair',
  'https://avataaars.io/?accessoriesType=Kurt&avatarStyle=Circle&clotheColor=Gray01&clotheType=BlazerShirt&eyeType=Surprised&eyebrowType=Default&facialHairColor=Red&facialHairType=Blank&graphicType=Selena&hairColor=Red&hatColor=Blue02&mouthType=Twinkle&skinColor=Pale&topType=LongHairCurly',
  'https://avataaars.io/?'
];

export default {
  data() {
    return {
      posts: [],
      headers: [
        {
          text: '№',
          value: 'Number',
          align: 'left',
          sortable: false,
        },
        {
          text: 'Name',
          value: 'Name',
          align: 'left',
          sortable: true
        },
        {
          text: 'User Name',
          value: 'Username',
          align: 'left',
          sortable: true
        },
        {
          text: 'Phone',
          value: 'Phone',
          align: 'left',
          sortable: true
        },
      ]
    }
  },

  methods: {
    randomAvatar () {

      return avatars[Math.floor(Math.random() * avatars.length)];
    }
  },

  created() {
    const vm = this;

    vm.axios.get('https://jsonplaceholder.typicode.com/posts').then(response => {
      var result = response && response.data;

      vm.posts = result;
    });
  }
}
</script>

<style>
  #virtual-scroll-table {
    max-height: 60vh;
    overflow: auto;
  }
  .table {
    border-radius: 3px;
    background-clip: border-box;
    border: 1px solid rgba(154, 133, 133, 0.12);
    background-color: transparent;
    border-color: #4478a1 !important;
    box-shadow:0 0 10px #3d92d5 !important;
  }
  td {
    height: 5px!important;
    font-size: medium!important;
  },
  th {
     height: 10px!important;
    border: 2px solid white!important;
  }

  table {
    background: #3b5474;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to top, #3B5474FF, #3B5474FF, #3B5474FF);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to top, #3B5474FF, #3B5474FF, #3B5474FF); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    color: white!important;
    font-weight: bold!important;
    border-color: #4478a1 !important;
    box-shadow:0 0 10px #3d92d5 !important;

  }

  tbody tr:nth-of-type(odd) {
    background-color: rgba(115, 144, 168, 0.58);
  }

  .gradientColorClass, .v-datatable__actions {
    background: #3b5474;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to top, #3B5474FF, #3B5474FF, #3B5474FF);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to top, #3B5474FF, #3B5474FF, #3B5474FF); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    border-color: #4478a1 !important;
    box-shadow:0 0 10px #3d92d5 !important;
  }
</style>
