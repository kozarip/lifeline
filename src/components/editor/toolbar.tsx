import React from 'react'
import { FaRegEdit } from 'react-icons/fa';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import { IToolbarStates } from 'interfaces/IToolbar';
import Tools from './tools';
import { Link } from 'react-router-dom';
import { removeSelections, removeDefaultLabels } from './preview';

class Toolbar extends React.Component<{}, IToolbarStates> {
  constructor(props: any){
    super(props);
    this.state = {
      isOpen: true,
    }
  }

  toggleToolbar = (): void => {
    const isOpen = !this.state.isOpen;
    this.setState({ isOpen });
  }

  getClassNames = (): string => {
    return this.state.isOpen ? 'open' : 'close';
  }

  handleOrderClick = () => {
    removeSelections();
    removeDefaultLabels();
    const previwContainer = document.getElementById('previewContainer');
    const secretPreview = document.getElementById('secretPreview');
    if (previwContainer && secretPreview) {
      (secretPreview as HTMLElement).innerHTML = previwContainer.innerHTML;
    }
  }

  render() {
    return (
      <aside id="toolbarContainer" className={this.getClassNames()}>
        <button
          title="Szerkesztő bezárása"
          className="btnToolbarToggle"
          onClick={this.toggleToolbar} >
          {this.state.isOpen ?
            <IoIosCloseCircleOutline /> :
            <FaRegEdit /> }
        </button>
        {
          this.state.isOpen ?
            <Tools /> :
            ''
        }
        <Link
          onClick={this.handleOrderClick}
          className="btn smallBtn orderBtn"
          to="/order">
            Megrendelés
        </Link>
      </aside>
    )
  }
};

export default Toolbar;
