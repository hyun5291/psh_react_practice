import { ChevronDown, Menu, Search } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, Button, Input, Separator, Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "../ui";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAppStore, faFacebook, faGooglePlay, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeOpen, faNewspaper } from "@fortawesome/free-regular-svg-icons";

const menu = [
    {
        label: "발견",
        newest: false,
        dropdown: false,
        underline: true,
    },
    {
        label: "채용",
        newest: true,
        dropdown: false,
        underline: false,
    },
    {
        label: "워크숍/커뮤니티",
        newest: false,
        dropdown: true,
        underline: false,
    },
    {
        label: "포폴 피드백",
        newest: true,
        dropdown: false,
        underline: false,
    },
    {
        label: "에이전시",
        newest: false,
        dropdown: false,
        underline: false,
    },
];

function AppHeader() {
    return (
        <>
            {/* 모바일 헤더 */}
            <header className="sticky top-0 z-10 w-full flex flex-col items-center justify-between pt-3 px-4 border-b bg-white xl:hidden">
                <div className="w-full h-full flex items-center justify-between">
                    <div className="w-full flex items-center gap-4">
                        <Sheet>
                            <SheetTrigger>
                                <Menu />
                            </SheetTrigger>
                            <SheetContent side="left" className={"px-8 gap-8 overflow-y-scroll"}>
                                <div className="flex flex-col gap-6 mt-16">
                                    <img src="src/assets/logo.svg" alt="" className="w-24" />
                                    <div className="flex flex-col">
                                        <p className="text-sm">회원가입 또는 로그인을 통해 13만개</p>
                                        <p className="text-sm">이상의 크리에이티브를 발견하고 수집해보세요.</p>
                                    </div>
                                    <div className="flex flex-col">
                                        <Button className={"bg-[#4acad4] hover:bg-[#41a3aa]"}>회원가입</Button>
                                        <Button variant={"outline"}>로그인</Button>
                                    </div>
                                </div>
                                <Separator />
                                <div className="flex flex-col gap-6">
                                    {menu.map((item, index) => {
                                        return (
                                            <div key={index} className={`h-full flex items-center gap-1 font-medium font-semibold `}>
                                                <p className={`text-[15px] ${item.underline && "mt-0.5"}`}>{item.label}</p>
                                                {item.dropdown && <ChevronDown size={16} />}
                                                {item.newest && <p className="text-xs text-[#05BCC6] font-medium">NEW</p>}
                                            </div>
                                        );
                                    })}
                                </div>
                                <Separator />
                                <div>22</div>
                                <Separator />
                                <div>
                                    <Accordion type="single" collapsible>
                                        <AccordionItem value="item-1">
                                            <AccordionTrigger>
                                                <p>패밀리 사이트</p>
                                            </AccordionTrigger>
                                            <AccordionContent>
                                                <div className="flex">
                                                    <img src="src/assets/logo.svg" alt="" className="w-22" />
                                                    <p>노트플리오</p>
                                                    <p>노트플리오</p>
                                                </div>
                                                <div className="flex">
                                                    <img src="src/assets/logo.svg" alt="" className="w-22" />
                                                    <p>노트플리오</p>
                                                    <p>노트플리오</p>
                                                </div>
                                                <div className="flex">
                                                    <img src="src/assets/logo.svg" alt="" className="w-22" />
                                                    <p>노트플리오</p>
                                                    <p>노트플리오</p>
                                                </div>
                                                <div className="flex">
                                                    <img src="src/assets/logo.svg" alt="" className="w-22" />
                                                    <p>노트플리오</p>
                                                    <p>노트플리오</p>
                                                </div>
                                            </AccordionContent>
                                        </AccordionItem>
                                    </Accordion>
                                </div>
                                <Separator />
                                <div className="flex flex-col gap-2">
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <FontAwesomeIcon icon={faNewspaper} />
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>노트폴리오 매거진</p>
                                        </TooltipContent>
                                    </Tooltip>
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <FontAwesomeIcon icon={faEnvelopeOpen} />
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>노폴레터</p>
                                        </TooltipContent>
                                    </Tooltip>
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <FontAwesomeIcon icon={faInstagram} />
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>노트폴리오 인스타그램</p>
                                        </TooltipContent>
                                    </Tooltip>
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <FontAwesomeIcon icon={faFacebook} />
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>노트폴리오 페이스북</p>
                                        </TooltipContent>
                                    </Tooltip>
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <FontAwesomeIcon icon={faYoutube} />
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>노트폴리오 유튜브</p>
                                        </TooltipContent>
                                    </Tooltip>
                                    <Separator orientation="vertical" className="h-3!" />
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <FontAwesomeIcon icon={faAppStore} />
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>iOS App</p>
                                        </TooltipContent>
                                    </Tooltip>
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <FontAwesomeIcon icon={faGooglePlay} />
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>Android App</p>
                                        </TooltipContent>
                                    </Tooltip>
                                    <img src="src/assets/logo.svg" alt="@LOGO" className="w-22 ml-8" />
                                </div>
                            </SheetContent>
                        </Sheet>
                        {/* 로고 */}
                        <img src="src/assets/logo.svg" alt="@LOGO" className="w-30" />
                    </div>
                    <div className="flex items-center gap-2">
                        {/* 로그인 */}
                        <Button variant={"outline"}>로그인</Button>
                        {/* 검색 */}
                        <Button size={"icon"} variant={"ghost"}>
                            <Search />
                        </Button>
                    </div>
                </div>
                <nav className="w-full h-14 flex items-center gap-4">
                    {menu.map((item, index) => {
                        return (
                            <div key={index} className={`h-full flex items-center gap-1 font-medium ${item.underline && "h-[calc(100%-2px)] border-b-2 border-black"}`}>
                                <p className={`text-[15px] ${item.underline && "mt-0.5"}`}>{item.label}</p>
                                {item.dropdown && <ChevronDown size={16} />}
                                {item.newest && <p className="text-xs text-[#05BCC6] font-medium">NEW</p>}
                            </div>
                        );
                    })}
                </nav>
            </header>
            {/* 데스크탑 헤더 */}
            <header className="sticky top-0 z-10 w-full h-14 hidden xl:flex items-center justify-between px-8 border-b bg-white">
                <div className="h-full flex items-center gap-10">
                    {/* 로고 */}
                    <img src="src/assets/logo.svg" alt="@LOGO" className="w-30" />
                    <nav className="h-full flex items-center gap-4">
                        {menu.map((item, index) => {
                            return (
                                <div key={index} className={`h-full flex items-center gap-1 font-medium ${item.underline && "h-[calc(100%-2px)] border-b-2 border-black"}`}>
                                    <p className={`text-[15px] ${item.underline && "mt-0.5"}`}>{item.label}</p>
                                    {item.dropdown && <ChevronDown size={16} />}
                                    {item.newest && <p className="text-xs text-[#05BCC6] font-medium">NEW</p>}
                                </div>
                            );
                        })}
                    </nav>
                </div>
                <div className="flex items-center gap-2">
                    <div className="flex items-center border px-3 rounded-full bg-neutral-50">
                        <Search size={18} className="text-neutral-400" />
                        <Input placeholder="230,000개 이상의 크리에이티브 검색" className="w-60 placeholder:text-neutral-400 outline-0 border-none focus-visible:ring-0" />
                    </div>
                    {/* 로그인 */}
                    <Button variant="link">로그인</Button>
                    {/* 회원가입 */}
                    <Button>회원가입</Button>
                </div>
            </header>
        </>
    );
}

export { AppHeader };
