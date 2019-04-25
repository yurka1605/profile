
export const parseData = (dataMainProfile, hobby, friends, users) => {
  users.forEach( (user, i) => {
    if (i === 0 ) {
      dataMainProfile = {
        picture: user.picture.large,
        fullName: `${user.name.first} ${user.name.last}`,
        city: `${user.location.city}`,
        info: {
          family: user.gender === 'male' ? 'Холост' : 'Married',
          phone: user.phone,
          email: user.email,
        },
      };
      hobby = ['cat', 'car', 'music', 'sport'];
      localStorage.setItem('hobby' ,JSON.stringify(hobby));
      localStorage.setItem('profile', JSON.stringify(dataMainProfile));
    } else {
      friends.push({
        picture: user.picture.medium,
        fullName: `${user.name.first} ${user.name.last}`,
        city: `${user.location.city}`,
        status: user.gender === 'male' ? 'online' : '',
      });
    }
  });
  return [dataMainProfile, hobby, friends];
};