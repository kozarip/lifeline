import React from 'react'
import { FaRegEdit } from 'react-icons/fa';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import { IToolbarStates } from 'interfaces/IToolbar';
import Tools from './tools';

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
      </aside>
    )
  }
};

export default Toolbar;
