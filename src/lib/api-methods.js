module.exports.download = (projectTree) => {
  window.location.href = `/api/project/generate?tree=${encodeURIComponent(JSON.stringify(projectTree))}`;
};

module.exports.getUserProjects = () => {
  const options = {
    method: 'GET',
    credentials: 'include',
  };

  return fetch('/api/user/projects', options)
    .then(projects => console.log(projects.text()))
    .catch(err => err);
};

module.exports.login = (username, password) => {
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
    credentials: 'include',
  };

  return fetch('/login', options)
    .then(userInfo => console.log(userInfo.text()))
    .catch(err => err);
};

module.exports.signup = (username, password) => {
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  };

  return fetch('/signup', options)
    .then(userInfo => console.log(userInfo.text()))
    .catch(err => err);
};

module.exports.logout = () => {
  const options = { method: 'GET' };

  return fetch('/logout', options)
    .then(userInfo => console.log(userInfo.text()))
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


module.exports.removeProject = (projectId) => {
  const options = {
    method: 'DELETE',
    credentials: 'include',
  };

  return fetch(`/api/project/${projectId}`, options)
    .then(projectInfo => projectInfo.text());
};

module.exports.createProject = (projectData) => {
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(projectData),
    credentials: 'include',
  };

  return fetch('/api/project/', options)
    .then(projectInfo => projectInfo.text());
};

module.exports.updateProject = (projectId, newProps) => {
  const options = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newProps),
    credentials: 'include',
  };

  return fetch(`/api/project/${projectId}`, options)
    .then(projectInfo => projectInfo.text());
};
