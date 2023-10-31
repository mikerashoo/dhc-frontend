import FormControl from "@/app/components/Form/FormControl";
import FormErrorMessage from "@/app/components/Form/FormErrorMessage";
import FormLabel from "@/app/components/Form/FormLabel";
import Input from "@/app/components/Form/Input";
import Delete from "@/app/icons/Delete";
import File from "@/app/icons/File";
import { displayErrorMessage } from "@/app/utils/helpers";
import React, { FC } from "react";
type Props = {
  register: any;
  control: any;
  errors: any;
  setStep: Function;
  aprtType: string[];
  setFloorPlans: Function;
  floorPlans: any;
};
const LastStep: FC<Props> = ({
  register,
  setFloorPlans,
  aprtType,
  errors,
  floorPlans,
}) => {
  const [fileNames, setFileNames] = React.useState<string[]>([]);
  const [sfValues, setSfValues] = React.useState<string[]>(
    Array(aprtType.length).fill("")
  );

  const handleFileChange = (e: any, index: number) => {
    const selectedFile = e.target.files[0];
    const sfValue = sfValues[index];
    console.log(sfValue);
    if (!sfValue) {
      // Если sfValue пусто, предотвратить загрузку файла и отобразить сообщение об ошибке
      displayErrorMessage(
        "Please enter a value for sf before uploading an image."
      );
      return;
    }
    if (selectedFile) {
      const fileLabel = selectedFile.name;

      // Определите, какой объект "FloorPlan" нужно обновить
      const existingFloorPlan = floorPlans[index];

      // Если объект уже существует, обновите его
      if (existingFloorPlan) {
        existingFloorPlan.image = selectedFile;
        existingFloorPlan.sf = sfValues[index]; // Обновите значение "sf"

        // Обновите состояние "floorPlans" в родительском компоненте
        setFloorPlans((prevFloorPlans: any) => [...prevFloorPlans]);
      } else {
        // Если объект не существует, создайте новый объект "FloorPlan"
        const newFloorPlan = {
          area: aprtType[index],
          image: selectedFile,
          sf: sfValues[index],
        };

        // Добавьте новый объект в состояние "floorPlans"
        setFloorPlans((prevFloorPlans: any) => [
          ...prevFloorPlans,
          newFloorPlan,
        ]);
      }

      // Обновите состояние локального стейта для отображения названия файла
      const newFileNames = [...fileNames];
      newFileNames[index] = fileLabel;
      setFileNames(newFileNames);
    }
  };
  const handleSfChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    // Создайте копию текущего состояния sfValues
    const newSfValues = [...sfValues];

    // Обновите значение sfValues для заданного индекса
    newSfValues[index] = e.target.value;

    // Обновите состояние sfValues
    setSfValues(newSfValues);
  };
  const handleDeleteFile = (e: any, index: number) => {
    e.preventDefault();
    const newFileNames = [...fileNames];
    newFileNames[index] = "";
    setFileNames(newFileNames);
    if (floorPlans[index]) {
      const deletedFloorPlan = floorPlans[index];
      if (deletedFloorPlan.image) {
        URL.revokeObjectURL(deletedFloorPlan.image);
      }
      const updatedFloorPlans = [...floorPlans];
      updatedFloorPlans.splice(index, 1);
      setFloorPlans(updatedFloorPlans);
    }
  };
  return (
    <>
      <div className="project__form-title">
        Add Pricing and <span>Floor Plant</span>
      </div>
      <div className="project__form-wrapper">
        <FormLabel>Price Details</FormLabel>
        {aprtType &&
          aprtType.map((el: string, index: number) => (
            <FormControl>
              <FormLabel className="small">{el}</FormLabel>
              <div className="project__form-double">
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <input
                    type="hidden"
                    value={el}
                    {...register(`PriceDetails.${index}.BHK`)}
                  />
                  <Input
                    placeholder="Price per sq.ft. (₹)"
                    register={{
                      ...register(`PriceDetails.${index}.Price`),
                    }}
                  />
                  <FormErrorMessage>
                    {/* Error handling for 'Price' field */}
                    {errors.PriceDetails &&
                      errors.PriceDetails[index] &&
                      errors.PriceDetails[index].Price &&
                      errors.PriceDetails[index].Price.message}
                  </FormErrorMessage>
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <Input
                    placeholder="Expected Price (₹)"
                    register={{
                      ...register(`PriceDetails.${index}.ExpectedPrice`),
                    }}
                  />
                  <FormErrorMessage>
                    {errors.PriceDetails &&
                      errors.PriceDetails[index] &&
                      errors.PriceDetails[index].ExpectedPrice &&
                      errors.PriceDetails[index].ExpectedPrice.message}
                  </FormErrorMessage>
                </div>
              </div>
            </FormControl>
          ))}
        <FormControl>
          <Input placeholder="Add EMI" register={{ ...register("EMI") }} />
          <FormErrorMessage>
            {errors?.EMI?.message && errors?.EMI?.message}
          </FormErrorMessage>
        </FormControl>
        <FormLabel>Floor Plans</FormLabel>
        {aprtType.length &&
          aprtType.map((el: string, index: number) => (
            <FormControl>
              <FormLabel className="small">{el}</FormLabel>
              <input
                accept=".jpeg, .png"
                className="project__form-input"
                type="file"
                id={`fileInput.${index}`}
                onChange={(e) => handleFileChange(e, index)}
              />
              <label
                className="project__form-input-label"
                htmlFor={`fileInput.${index}`}
              >
                {
                  <div>
                    {" "}
                    {/* {fileUploaded[index] && (
                      <span className="project__form-extension">
                        {getFileExtension(fileNames[index])}
                      </span>
                    )} */}
                    {fileNames[index] ? fileNames[index] : "Upload image"}
                  </div>
                }

                {fileNames[index] ? (
                  <span onClick={(e) => handleDeleteFile(e, index)}>
                    <Delete />
                  </span>
                ) : (
                  <File />
                )}
              </label>
              <input
                type="text"
                placeholder="sf"
                className="sf__input"
                value={sfValues[index]}
                onChange={(e) => handleSfChange(e, index)}
              />
            </FormControl>
          ))}

        <button type="submit" className="btn">
          Confirm
        </button>
      </div>
    </>
  );
};

export default LastStep;
