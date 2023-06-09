import React from 'react';
import FaqItem from './FaqItem';

export default function Faq() {
    return (
        <section className="max-w-screen-lg mx-auto">
            <div className="py-8 px-4 sm:py-16 lg:px-6">
                <h2 className="mb-8 text-3xl tracking-tight font-semibold text-gray-900">
                    Frequently asked questions
                </h2>
                <div className="grid pt-8 text-left border-t border-gray-200 md:gap-16 md:grid-cols-2">
                    <div>
                        <FaqItem
                            q="Why is this such a good idea"
                            a="Blood, sweat and tears made it the amazing product you see before you now."
                        />
                    </div>
                    <div>
                        <FaqItem
                            q="You are really cool"
                            a="Not really a question but I appreciate that."
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
