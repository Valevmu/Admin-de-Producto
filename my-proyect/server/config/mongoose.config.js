const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/my-proyect', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('We are making some connections ninjas!'))
    .catch(err => console.log('Somenthing went wrong', err));
