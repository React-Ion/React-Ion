import React from 'react';

const capitalizeFirstLetter = s => s.charAt(0).toUpperCase() + s.slice(1);
const makeComponentName = string => string.split(' ').map(word => capitalizeFirstLetter(word)).join('');

class AddPage extends React.Component {
  constructor(props) {
    super(props);
    this.createPage = this.createPage.bind(this);
  }

  setPage(e, index) {
    this.props.setSelected(e, this.props.routes.appPages[index].present.id);
    this.props.setPageSelected(index);
  }

  createPage(context) {
    this.props.addPage(
      makeComponentName(context),
      this.props.nextId,
    );
    setTimeout(() => {
      this.props.setPageSelected(this.props.store.pages.length - 1);
      this.props.setSelected(null, this.props.routes.appPages[this.props.routes.appPages.length - 1].present.id);
    }, 100);
  }

  render() {
    const context = this;
    const pages = this.props.store.appPages.map((page, index) => (
      <option
        key={index}
        value={index}
      > {page.present.name}
      </option>
    ));

    return (
      <div className="add-page">
        <button
          onClick={() => this.props.toggleTextModal(
            'enter page name',
            'text',
            this.createPage,
          )}
        > <i className="fa fa-plus" aria-hidden="true" /> PAGE
        </button>
        <select
          value={context.props.pageSelected}
          className="page-select"
          ref={s => (this.selected = s)}
          name="pages"
          onChange={e => this.setPage(
            e, this.selected.value,
          )}
        > {pages}
        </select>
      </div>
    );
  }
}

export default AddPage;