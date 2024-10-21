import { ButtonGroup, Icon } from "@chakra-ui/react";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, IconButton } from "../Button";

interface IPagination {
  pageIndex: number;
  setPageIndex: React.Dispatch<React.SetStateAction<number>>;
  totalPage: number;
}

const Pagination: React.FC<IPagination> = ({
  pageIndex,
  totalPage,
  setPageIndex,
}) => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scroll({ top: 0, behavior: "smooth" });
  }, [pageIndex]);

  const handlePrev = () => {
    const prevPage = pageIndex - 1;
    setPageIndex(prevPage);
    navigate(`?page=${prevPage}`);
  };

  const handleNext = () => {
    const nextPage = pageIndex + 1;
    setPageIndex(nextPage);
    navigate(`?page=${nextPage}`);
  };

  return (
    <ButtonGroup size={"sm"}>
      <IconButton
        aria-label="previous"
        isDisabled={pageIndex === 1}
        onClick={handlePrev}
        icon={<Icon as={CaretLeft} boxSize={5} />}
      />
      <Button aria-label="current">{pageIndex}</Button>
      <IconButton
        aria-label="next"
        isDisabled={pageIndex === totalPage}
        onClick={handleNext}
        icon={<Icon as={CaretRight} boxSize={5} />}
      />
    </ButtonGroup>
  );
};

export default Pagination;
