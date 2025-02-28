import { PropsWithChildren } from "react";

type ModalProps = PropsWithChildren<{
    isOpen: boolean;
    onClose: VoidFunction;
    icon?: JSX.Element;
    iconBgColor?: string;
    title: string;
}>

const Modal = ({ isOpen, onClose, icon, iconBgColor, title, children }: ModalProps) => {

    if (!isOpen) return null

    return (
        <>
            <div className="relative z-20" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                {/* <!--
                Background backdrop, show/hide based on modal state.

                Entering: "ease-out duration-300"
                From: "opacity-0"
                To: "opacity-100"
                Leaving: "ease-in duration-200"
                From: "opacity-100"
                To: "opacity-0"
  --> */}
                <div className="fixed inset-0 bg-gray-900/75 transition-opacity" aria-hidden="true"></div>

                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        {/* <!--
                        Modal panel, show/hide based on modal state.

                        Entering: "ease-out duration-300"
                        From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        To: "opacity-100 translate-y-0 sm:scale-100"
                        Leaving: "ease-in duration-200"
                        From: "opacity-100 translate-y-0 sm:scale-100"
                        To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
      --> */}
                        <div className="relative transform overflow-hidden rounded-2xl bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                <div className="sm:flex sm:items-start">
                                    <div className={`mx-auto flex size-12 shrink-0 items-center justify-center rounded-full sm:mx-0 sm:size-10 ${iconBgColor ?? 'bg-indigo-500/20'}`}>
                                        {icon}
                                    </div>
                                    <div className="mt-3 sm:mt-0 sm:ml-4 text-left">
                                        <h3 className="text-base font-poetsen text-gray-900" id="modal-title">{title}</h3>
                                        <div className="mt-2">
                                            {children}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                <button
                                    type="button"
                                    onClick={onClose}
                                    className="inline-flex w-full justify-center rounded-md bg-indigo-500 px-3 py-2 text-sm text-white shadow-xs hover:bg-indigo-600 sm:ml-3 sm:w-auto">
                                    Ok, got it
                                </button>
                                {/* <button type="button" className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50 sm:mt-0 sm:w-auto">Cancel</button> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};


export default Modal