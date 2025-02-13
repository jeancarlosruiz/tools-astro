import { Label } from "./ui/label";
import { Input } from "./ui/input";

const Root = ({ root, onchange, onblur }: any) => {
  return (
    <div>
      <Label htmlFor="root-input">
        <strong>Root:</strong>
      </Label>
      <div>
        <Input
          type="number"
          id="root-input"
          value={root}
          onChange={onchange}
          onBlur={onblur}
        />
        <span>
          <strong>px</strong>
        </span>
      </div>
    </div>
  );
};

export default Root;
