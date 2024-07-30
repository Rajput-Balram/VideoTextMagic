import { useEffect, useState } from "react";
import Inbox from "./Inbox";
import { useVideoContext } from "./VideoContext";

export const OverlayInput: React.FC = () => {
  const {
    setOverlayArray,
    overlayFontFamily,
    setOverlayFontFamily,
    overlayAnimation,
    setOverlayAnimation,
  } = useVideoContext();
  const [overlayText, setOverlayText] = useState<string>("");
  const [timeStam, setTimeStam] = useState<string>("");
  const [isDisabled, setIsDisabled] = useState(false);

  const buttonStyle: React.CSSProperties = {
    padding: "5px 20px",
    height: "45px",
    fontSize: "16px",
    alignItems: "center",
    color: "#fff",
    backgroundColor: isDisabled ? "#ccc" : "#007bff",
    border: "none",
    borderRadius: "4px",
    cursor: isDisabled ? "not-allowed" : "pointer",
    transition: "background-color 0.3s ease",
    outline: "none",
  };

  const selectStyle: React.CSSProperties = {
    width: "100%",
    padding: "12px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    backgroundColor: "#fff",
    color: "#333",
    appearance: "none",
    outline: "none",
    cursor: "pointer",
    transition: "border-color 0.3s ease, box-shadow 0.3s ease",
    position: "relative",
  };

  const containerStyle: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: "49% 49%",
    gridTemplateRows: "100%",
    gap: "20px",
    padding: "10px",
  };

  const handlTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOverlayText(event.target.value);
  };

  const handlTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTimeStam(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (overlayText == "" && timeStam == "") return;

    setOverlayArray((prev) => [...prev, { text: overlayText, time: timeStam }]);
    setOverlayText("");
    setTimeStam("");
  };

  useEffect(() => {
    if (!(overlayText == "" && timeStam == "")) {
      setIsDisabled(false);
    } else setIsDisabled(true);
  }, [overlayText && timeStam]);

  return (
    <div className="container" style={containerStyle}>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "10px" }}
      >
        <Inbox
          type="text"
          value={overlayText}
          onChange={handlTextChange}
          placeholder="Overlay Text"
          id="overlayText"
          name="overlayText"
        />
        <Inbox
          type="number"
          value={timeStam}
          onChange={handlTimeChange}
          placeholder="Time Stam"
          id="overlayTimeStam"
          name="overlayTimeStam"
        />
        <button type="submit" disabled={isDisabled} style={buttonStyle}>
          Add overlay
        </button>
      </form>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <select
          style={selectStyle}
          value={overlayFontFamily}
          onChange={(e) => setOverlayFontFamily(e.target.value)}
        >
          <option value={`'Montserrat', sans-serif`}>Montserrat</option>
          <option value={`"Lora", serif`}>Lora</option>
          <option value={`"Playfair Display", serif`}>Playfair Display</option>
        </select>

        <select
          style={selectStyle}
          value={overlayAnimation}
          onChange={(e) =>
            setOverlayAnimation(
              e.target.value as "fadeIn" | "slideIn" | "scaleUp"
            )
          }
        >
          <option value="fadeIn">Fade In</option>
          <option value="slideIn">Slide In</option>
          <option value="scaleUp">ScaleUp</option>
        </select>
      </div>
    </div>
  );
};
