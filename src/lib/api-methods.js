module.exports.download = (projectTree) => {
  window.location.href = `/api/project/generate?tree=${encodeURIComponent(JSON.stringify(projectTree))}`;
};

module.exports.getUserProjects = () => {
  const options = {
    method: 'GET',
    credentials: 'include',
  };

  return fetch('/api/user/projects', options)
    .then(projects => projects.json())
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
    .then(user => user.json())
    .catch(err => err);
};

module.exports.signup = (username, password) => {
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  };

  return fetch('/signup', options)
    .then(user => user.json())
    .catch(err => err);
};

module.exports.logout = () => {
  const options = { method: 'GET' };

  return fetch('/logout', options)
    .then(user => user.json())
    .catch(err => err);
};

module.exports.getProject = (projectId) => {
  const options = {
    method: 'GET',
    credentials: 'include',
  };

  return fetch(`/api/project/${projectId}`, options)
    .then(project => project.json())
    .catch(err => err);
};

module.exports.getAllProjects = () => {
  const options = {
    method: 'GET',
    credentials: 'include',
  };

  return fetch('/api/project/', options)
    .then(projects => projects.json())
    .catch(err => err);
};


module.exports.removeProject = (projectId) => {
  const options = {
    method: 'DELETE',
    credentials: 'include',
  };

  return fetch(`/api/project/${projectId}`, options)
    .then(project => project.json());
};

module.exports.createProject = (projectData) => {
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(projectData),
    credentials: 'include',
  };

  return fetch('/api/project/', options)
    .then(project => project.json());
};

module.exports.updateProject = (projectId, newProps) => {
  const options = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newProps),
    credentials: 'include',
  };

  return fetch(`/api/project/${projectId}`, options)
    .then(project => project.json());
};
