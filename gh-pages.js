var ghpages = require('gh-pages');

ghpages.publish(
    'public', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'https://github.com/itsprathvi/MyPolls.git', // Update to point to your repository  
        user: {
            name: 'Prathviraj Prabhu', // update to use your name
            email: 'prathvirajbellampalli@gmail.com' // Update to use your email
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)