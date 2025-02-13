import { useId } from "react";
import { Input } from "../react/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../react/ui/select";
import { uniqueID } from "../../../helpers/index";
import { Label } from "../react/ui/label";

function CustomInput({
  id,
  inputValue,
  inputOnchange,
  selectValue,
  selectOnchange,
  selectItemsArr,
  children,
}: any) {
  const reactID = useId();
  const selectId = `${reactID}-select-unit`;

  return (
    <div>
      <Input
        id={id}
        type="number"
        value={inputValue}
        onChange={inputOnchange}
      />
      <Label htmlFor={selectId} className="visually-hidden">
        Unit select
      </Label>
      <Select value={selectValue} onValueChange={selectOnchange}>
        <SelectTrigger
          id={selectId}
          name="unit-select"
          aria-label="Unit Selection Button"
        >
          <SelectValue placeholder="Select a convertion" />
        </SelectTrigger>
        <SelectContent>
          {selectItemsArr &&
            selectItemsArr.map((el) => {
              const id = uniqueID();
              return (
                <SelectItem key={id} value={el}>
                  {el}
                </SelectItem>
              );
            })}
        </SelectContent>
      </Select>
      {children}
    </div>
  );
}

export default CustomInput;
