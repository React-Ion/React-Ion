module.exports.download = (projectTree) => {
  window.location.href = `/api/project/generate?tree=${encodeURIComponent(JSON.stringify(projectTree))}`;
};

module.exports.getUserProjects = () => {

};

module.exports.login = (username, password) => {
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
    credentials: 'include',
  };

  return fetch('/login', options)
    .then(userInfo => userInfo)
    .catch(err => err);
};

module.exports.signup = (username, password) => {
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  };

  return fetch('/signup', options)
    .then(userInfo => userInfo)
    .catch(err => err);
};

module.exports.logout = () => {
  const options = { method: 'GET' };

  return fetch('/logout', options)
    .then(userInfo => userInfo)
    .catch(err => err);
};

module.exports.getProject = (projectId) => {
  const options = {
    method: 'GET',
    credentials: 'include',
  };

  return fetch(`/api/project/${projectId}`, options)
    .then(project => console.log(project.text()))
    .catch(err => err);
};

module.exports.getAllProjects = () => {
  const options = {
    method: 'GET',
    credentials: 'include',
  };

  return fetch('/api/project/', options)
    .then(projects => console.log(projects.text()))
    .catch(err => err);
};


module.exports.removeProject = () => {

};

module.exports.createProject = (projectData) => {
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(projectData),
    credentials: 'include',
  };

  return fetch('/api/project/', options)
    .then(projectInfo => projectInfo);
};

module.exports.updateProject = () => {

};
