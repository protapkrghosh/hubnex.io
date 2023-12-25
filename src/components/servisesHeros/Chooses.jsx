

const Chooses = ({firsTitle,secondTitle,thirdTitle,firstDescriptions,secondDescriptions,thirdDescriptions,header,hederTitle,isOurself}) => {
    return (
        <div className={`${isOurself ? ' ourSelfFirstDiv' : 'chooseFirstDiv'}`}>
        <div className={`${isOurself ? ' ourSelfSecondDiv' : 'chooseSecondDiv'}`}>
            <div className={`${isOurself ? ' ourSelfThirdDiv' : 'chooseThirdDiv'}`}>
                <div className={`${isOurself ? ' ourSelfFourthDiv' : 'chooseFourthDiv'}`}>
                    {/* bug fix: lg:gap-10 xl:gap-12 */}
                   <div className={`${isOurself ? ' ourSelfFifthDiv' : 'chooseFifthDiv'}`}>
                    <h1 className={`${isOurself ? ' ourSelfH1' : 'chooseH1'}`}>{header}</h1>
                    <p className={`${isOurself ? ' ourSelfP' : 'chooseP'}`}>{hederTitle}</p>
                   </div>
                    {/* bug fix: add gap-3 md:gap-10 */}
                   <div className=' w-full flex flex-col gap-3 md:gap-10 lg:flex-row  lg:justify-evenly items-center  '>
                   <div className='about-us-who-we-are-div'>
                            <span className=' about-us-who-we-are-span '>{firsTitle}</span>
                            <p className='about-us-who-we-are-p'>{firstDescriptions}</p>
                        </div>
                        <hr className=' about-us-who-we-are-hr'/>
                        <div className='about-us-who-we-are-div'>
                            <span className=' about-us-who-we-are-span '>{secondTitle}</span>
                            <p className='about-us-who-we-are-p pt-6'>{secondDescriptions}</p>
                        </div>
                        <hr className=' about-us-who-we-are-hr'/>
                        <div className='about-us-who-we-are-div'>
                            <span className=' about-us-who-we-are-span '>{thirdTitle}</span>
                            <p className='about-us-who-we-are-p pt-5'>{thirdDescriptions} </p>
                        </div>
                   </div>
                </div>
                
            </div>
        </div>
    </div>
    );
};

export default Chooses;