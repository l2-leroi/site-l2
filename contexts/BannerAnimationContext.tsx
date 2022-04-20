import { createContext, useState } from "react";



interface AnimationContextProps {
    isBannerAnimating: boolean;
    // setIsBannerAnimating: UpdateType;
    setIsBannerAnimating: (data: boolean) => void;
}

type UpdateType = React.Dispatch<React.SetStateAction<boolean>>;

const defaultUpdate: UpdateType = () => false;

const isBannerAnimatingInitial: AnimationContextProps = {
    isBannerAnimating: false,
    setIsBannerAnimating: data => {}
  };
  
export const BannerAnimationContext = createContext<AnimationContextProps>(isBannerAnimatingInitial);

export function BannerAnimationContextProvider({children}) {
    const [isBannerAnimating, setIsBannerAnimating] = useState(false);

    return (
        <BannerAnimationContext.Provider value={{isBannerAnimating, setIsBannerAnimating}}>
            {children}
        </BannerAnimationContext.Provider>
    )
}