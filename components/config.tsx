import { useTheme } from "@/context/theme-context";
import useMouse from "@react-hook/mouse-position";
import { useRef } from "react";
//@ts-ignore
import randomColor from "randomcolor";
export const useVariants = (
  ref: React.MutableRefObject<null>,
  delay: number
) => {
  const { theme } = useTheme();
  const mouse = useMouse(ref, {
    enterDelay: delay,
    leaveDelay: delay,
  });

  let mouseXPosition = 0;
  let mouseYPosition = 0;
  if (mouse.clientX !== null) {
    mouseXPosition = mouse.clientX;
  }

  if (mouse.clientY !== null) {
    mouseYPosition = mouse.clientY;
  }

  return {
    default: {
      opacity: 1,
      height: 32,
      width: 32,
      fontSize: "20px",
      backgroundColor: "#13ACDE",
      x: mouseXPosition,
      y: mouseYPosition,
      transition: {
        type: "spring",
        mass: 0.6,
      },
    },
    heart: {
      opacity: 1,
      backgroundColor: "#EF5151",
      color: theme !== "dark" ? "white" : "black",
      height: 64,
      width: 64,
      fontSize: "32px",
      x: mouseXPosition - 48,
      y: mouseYPosition - 48,
    },
    project: {
      opacity: 1,
      backgroundColor: theme === "dark" ? "white" : "black",
      color: theme !== "dark" ? "white" : "black",
      height: 100,
      width: 100,
      fontSize: "14px",
      x: mouseXPosition - 32,
      y: mouseYPosition - 32,
    },
    bigCircle: {
      opacity: 1,
      backgroundColor: theme === "dark" ? "white" : "black",
      color: theme !== "dark" ? "white" : "black",
      height: 80,
      width: 80,
      fontSize: "12px",
      fontWeight: "600",
      x: mouseXPosition - 48,
      y: mouseYPosition - 48,
    },
    skill: {
      opacity: 1,
      borderWidth: 7,
      borderColor: randomColor(),
      backdropFilter: "blur(30px)",
      backgroundColor: "transparent",
      color: theme === "dark" ? "white" : "black",
      height: 120,
      width: 120,
      fontSize: "12px",
      fontWeight: "600",
      x: mouseXPosition - 48,
      y: mouseYPosition - 48,
    },
  };
};

export const spring = {
  type: "spring",
  stiffness: 500,
  damping: 28,
};
export const spring2 = {
  type: "spring",
  stiffness: 200,
  damping: 18,
};
