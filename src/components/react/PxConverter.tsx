import { useState, useEffect } from "react";
import copy from "copy-to-clipboard";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../react/ui/select";
import { toast } from "sonner";
import { Input } from "../react/ui/input";
import { Label } from "../react/ui/label";
import { Button } from "../react/ui/button.tsx";
import { convertionFunctions } from "../../../helpers/index";
import CustomInput from "../react/customInput";

const SELECT_ITEMS_VALUES = ["px", "rem", "em", "%"];

const PxConvertion = () => {
  const [root, setRoot] = useState<string>("16");
  const [toBeConverted, setToBeConverted] = useState<string>("px");
  const [unitValue, setUnitValue] = useState<string>("24");
  const [convertedSelected, setConvertedSelected] = useState<string>("rem");
  const [result, setResult] = useState<string>("");

  const handleOnBlur = (value: string) => {
    if (value === "0" || " ") {
      setRoot("16");
    }
  };

  const calcResult = () => {
    if (Number.isNaN(root) || Number.isNaN(unitValue)) return;

    const rootValue = Number(unitValue);
    const value = Number(root);
    const convertionKey = `${toBeConverted}:${convertedSelected}`;

    const converFunction = convertionFunctions[convertionKey];
    if (!converFunction) return;

    setResult(converFunction(rootValue, value).toString());
  };

  const switchSelection = () => {
    const prev1 = toBeConverted;
    const prev2 = convertedSelected;

    setToBeConverted(prev2);
    setConvertedSelected(prev1);
    setUnitValue(result.toString());
  };

  const copyToClipboard = () => {
    if (result === "") return;

    copy(`${result}${convertedSelected}`);
    toast("Copied to clipboard.", {
      className: "my-toast",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          width="16"
          height="16"
        >
          <path
            strokeLinecap="round"
            fill="#012b37"
            d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"
          ></path>
        </svg>
      ),
    });
  };

  useEffect(() => {
    calcResult();
  }, [root, unitValue, toBeConverted, convertedSelected, result]);

  return (
    <section>
      <div>
        <Label htmlFor="root-input">
          <strong>Root:</strong>
        </Label>
        <div>
          <Input
            type="number"
            id="root-input"
            value={root}
            onChange={(e) => setRoot(e.target.value)}
            onBlur={(e) => handleOnBlur(e.target.value)}
          />
          <span>
            <strong>px</strong>
          </span>
        </div>
      </div>
      <div>
        <Label htmlFor="to-convert" className="visually-hidden">
          Value to be converted
        </Label>
        <CustomInput
          id="to-convert"
          inputValue={unitValue}
          inputOnchange={(e) => setUnitValue(e.target.value)}
          selectValue={toBeConverted}
          selectOnchange={(value) => {
            setToBeConverted(value);
            calcResult();
          }}
          selectItemsArr={SELECT_ITEMS_VALUES}
        />
        <Button
          name="switch-btn"
          aria-label="Switch values unit button"
          size="icon"
          onClick={switchSelection}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            width="20"
            height="20"
            role="img"
          >
            <path d="M5.22 14.78a.75.75 0 0 0 1.06-1.06L4.56 12h8.69a.75.75 0 0 0 0-1.5H4.56l1.72-1.72a.75.75 0 0 0-1.06-1.06l-3 3a.75.75 0 0 0 0 1.06l3 3Zm5.56-6.5a.75.75 0 1 1-1.06-1.06l1.72-1.72H2.75a.75.75 0 0 1 0-1.5h8.69L9.72 2.28a.75.75 0 0 1 1.06-1.06l3 3a.75.75 0 0 1 0 1.06l-3 3Z"></path>
          </svg>
        </Button>
        <div>
          <Label htmlFor="select-unit" className="visually-hidden">
            Unit select
          </Label>
          <Select
            value={convertedSelected}
            onValueChange={(value) => {
              setConvertedSelected(value);
              calcResult();
            }}
          >
            <SelectTrigger
              id="select-unit"
              name="unit-select"
              aria-label="Unit Selection Button"
            >
              <SelectValue placeholder="Select a convertion" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="px">px</SelectItem>
              <SelectItem value="rem">rem</SelectItem>
              <SelectItem value="em">em</SelectItem>
              <SelectItem value="%">Percentage</SelectItem>
            </SelectContent>
          </Select>
          <Button
            name="copy-to-clipboard-btn"
            aria-label="Copy to clipboard button"
            size="icon"
            onClick={copyToClipboard}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              width="20"
              height="20"
              role="img"
            >
              <path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z"></path>
              <path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"></path>
            </svg>
          </Button>
          <Label htmlFor="result-input" className="visually-hidden">
            <strong>Value converted</strong>
          </Label>
          <span>{result}</span>
        </div>
      </div>
    </section>
  );
};

export default PxConvertion;
