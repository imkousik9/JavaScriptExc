var whoIsHere = 'user'
if (whoIsHere === 'user') {
    console.log('Greeting message for user')
    console.log('Allow access to view all courses')
} else if (whoIsHere === 'teacher') {
    console.log('Greeting message for Teacher')
    console.log('Allow access to his courses')
} else {
    console.log('MESSAGE : please verify your email')
    console.log('send user an email for verification')
}