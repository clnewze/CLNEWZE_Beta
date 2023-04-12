import React, { useState } from "react";
import {
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  ButtonDropdown,
  Button,
} from "reactstrap";
// import "../information.scss"

const InformationTitleDropdown = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);
  return (
    <ButtonDropdown isOpen={dropdownOpen} toggle={toggle} direction="down" className="dropdown selectBox">
      <Button className="dropdownTitle" outline> 전체장르</Button>
      <DropdownToggle className="dropdownToggle" caret color="primary">
        {/* 전체 */}
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem>전체장르</DropdownItem>
        <DropdownItem>클래식</DropdownItem>
        <DropdownItem>뉴에이지</DropdownItem>
        <DropdownItem>재즈</DropdownItem>
        <DropdownItem>팝</DropdownItem>
        <DropdownItem>가요</DropdownItem>
        <DropdownItem>OST</DropdownItem>
        <DropdownItem>그 외</DropdownItem>
      </DropdownMenu>
    </ButtonDropdown>
  );
};

export default InformationTitleDropdown;