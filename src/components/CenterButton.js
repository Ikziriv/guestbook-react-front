import React from "react";
import { Link } from "react-router-dom";
import "../css/tailwind.css";
import { MdHome, MdReorder } from "react-icons/md";
import { BsCardList } from "react-icons/bs";
import posed from "react-pose";

const itemConfig = {
  open: { height: "auto", opacity: 1, flip: true },
  closed: { height: "auto", opacity: 0, flip: true },
};
const Item = posed.div(itemConfig);
class CenterButton extends React.PureComponent {
  state = { isOpen: false };
  toggle = () => this.setState((prevState) => ({ isOpen: !prevState.isOpen }));
  render() {
    const { isOpen } = this.state;
    return (
      <div className="absolute top-0 inset-x-0 z-40">
        <div className="relative">
          <div className="w-full h-16 block">
            <div className="flex justify-end">
              <div className="py-0 sm:mt-12 mt-4 sm:mr-8 mr-16 sm:px-0 px-1">
                <div className="w-16 h-16 rounded-full bg-transparent hover:bg-gray-200">
                  <div className="flex justify-center">
                    <div className="py-4 mt-1">
                      <MdReorder
                        onClick={this.toggle}
                        className="w-6 h-6 fill-current text-red-600 hover:text-gray-300"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Item
            className="w-auto h-16 sm:mt-12 mt-1"
            pose={isOpen ? "open" : "closed"}
          >
            <div className="flex justify-end">
              <div className="rounded bg-white w-16 h-auto z-10 shadow-lg">
                <div className="flex justify-center py-4">
                  <ul>
                    <li>
                      <Link to="/">
                        <MdHome className="w-6 h-6 fill-current text-red-600 hover:text-gray-300" />
                      </Link>
                    </li>
                    <li className="mt-4">
                      <Link to="/guest">
                        <BsCardList className="w-6 h-6 fill-current text-red-600 hover:text-gray-300" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Item>
        </div>
      </div>
    );
  }
}

export default CenterButton;
