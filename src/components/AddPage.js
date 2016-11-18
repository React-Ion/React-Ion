import React from 'react';

export default class AddPage extends React.Component {

  setPage(e, index) {
    this.props.setSelected(e, this.props.routes[index].id);
    this.props.setPageSelected(index);
  }

  callback(context) {
    this.props.addPage(
      context.text.value,
      this.props.nextId,
    );

    setTimeout(() => {
      this.props.setPageSelected(this.props.store.pages.length - 1);
      this.props.setSelector(this.props.routes[this.props.routes.length - 1].id);
    }, 100);
  }

  render() {
    const context = this;

    const pages = this.props.store.present.map((page, index) => (
      <option
        key={index}
        value={index}
        selected={context.props.pageSelected === index ? 'selected' : ''}
      > {page.name.toUpperCase()}
      </option>
    ));

    return (
      <div>
        <button
          onClick={() => this.props.toggleTextModal(
            'enter page name',
            this.callback.bind(this),
          )}
        > <i className="fa fa-plus" aria-hidden="true" /> ADD PAGE
        </button>
        <select
          ref={s => this.selected = s}
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

