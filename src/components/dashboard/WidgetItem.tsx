import React from 'react'
import { TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti';

interface Props {
    title: string;
    value?: string | number;
    percentage?: number;
    description?: string;
}

export const WidgetItem = ({
    title,
    value,
    percentage,
    description
}: Props) => {
    return (
        <div className="md:col-span-2 lg:col-span-1" >
            <div className="h-full py-8 px-6 space-y-6 rounded-xl border border-gray-200 bg-white">
                <div>
                    <h5 className="text-xl text-gray-600 text-center">{ title }</h5>
                    <div className="mt-2 flex justify-center gap-4">
                        <h3 className="text-3xl font-bold text-gray-700">{ value }</h3>
                        {
                            percentage !!
                                ? (
                                    <div className={"flex text-2xl items-center gap-1 " + (percentage > 0 ? "text-green-500" : "text-red-500")}>
                                        {
                                            percentage > 0
                                                ? <TiArrowSortedUp className="text-2xl" color="green"/>
                                                : <TiArrowSortedDown className="text-2xl" color="red"/>
                                        }
                                        <span>{ percentage }%</span>
                                    </div>
                                )
                                : <span></span>
                        }
                    </div>
                    <span className="block text-center text-gray-500">{ description }</span>
                </div>
            </div>
        </div>
    );
}
