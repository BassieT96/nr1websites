"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader2, CheckCircle2, Globe, ShoppingCart, Palette, Code2, Rocket, Calendar, Wallet, User, Mail, Building, Phone } from 'lucide-react';

type ProjectType = 'website' | 'webshop' | 'redesign' | 'custom' | null;
type Budget = 'starter' | 'pro' | 'business' | 'enterprise' | null;

export function ContactForm() {
    const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');
    const [projectType, setProjectType] = useState<ProjectType>(null);
    const [budget, setBudget] = useState<Budget>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('loading');
        // Simuleer backend verzending
        setTimeout(() => setStatus('success'), 1500);
    };

    const projectTypes = [
        { id: 'website', label: 'Nieuwe Website', icon: Globe, desc: 'Een strakke, converterende website' },
        { id: 'webshop', label: 'Webshop', icon: ShoppingCart, desc: 'Online verkoop & e-commerce' },
        { id: 'redesign', label: 'Redesign', icon: Palette, desc: 'Frisse look voor je huidige site' },
        { id: 'custom', label: 'Maatwerk', icon: Code2, desc: 'Webapplicatie of portaal' },
    ];

    const budgets = [
        { id: 'starter', label: '< €2.5k', desc: 'Essentiële online start' },
        { id: 'pro', label: '€2.5k - €5k', desc: 'Maatwerk & premium design' },
        { id: 'business', label: '€5k - €10k', desc: 'Complexe platformen' },
        { id: 'enterprise', label: '> €10k', desc: 'Enterprise oplossingen' },
    ];

    return (
        <div className="bg-surface/80 backdrop-blur-xl rounded-[32px] p-8 md:p-12 border border-border relative overflow-hidden shadow-2xl">
            {/* Subtle Inner Glow */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="relative z-10">
                <AnimatePresence mode="wait">
                    {status === 'success' ? (
                        <motion.div
                            key="success"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="flex flex-col items-center justify-center text-center py-20"
                        >
                            <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mb-8 border border-green-500/20 shadow-[0_0_30px_rgba(34,197,94,0.2)]">
                                <CheckCircle2 className="w-10 h-10 text-green-400" />
                            </div>
                            <h4 className="text-[32px] font-display font-bold text-white mb-4">Aanvraag ontvangen!</h4>
                            <p className="text-ink-secondary font-sans text-[16px] max-w-sm mb-8">
                                Bedankt voor je interesse. We hebben je aanvraag in goede orde ontvangen en nemen binnen 24 uur contact met je op.
                            </p>
                            <button
                                onClick={() => {
                                    setStatus('idle');
                                    setProjectType(null);
                                    setBudget(null);
                                }}
                                className="px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-colors"
                            >
                                Nieuwe aanvraag
                            </button>
                        </motion.div>
                    ) : (
                        <motion.form
                            key="form"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onSubmit={handleSubmit}
                            className="space-y-12"
                        >
                            {/* Step 1: Project Type */}
                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-[20px] font-display font-bold text-white flex items-center gap-3 mb-2">
                                        <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-accent text-sm">1</div>
                                        Wat wil je bereiken?
                                    </h3>
                                    <p className="text-ink-secondary text-sm ml-11">Kies het type project dat het beste bij je past.</p>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {projectTypes.map((type) => (
                                        <button
                                            key={type.id}
                                            type="button"
                                            onClick={() => setProjectType(type.id as ProjectType)}
                                            className={`p-5 rounded-2xl border text-left transition-all duration-300 flex items-start gap-4 group ${projectType === type.id
                                                ? 'bg-accent/10 border-accent/50 shadow-[0_0_20px_rgba(0,170,255,0.15)] ring-1 ring-accent/30'
                                                : 'bg-white/5 border-white/5 hover:border-white/10 hover:bg-white/10'
                                                }`}
                                        >
                                            <div className={`mt-1 transition-colors duration-300 ${projectType === type.id ? 'text-accent' : 'text-ink-tertiary group-hover:text-ink-secondary'}`}>
                                                <type.icon className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <div className={`font-semibold mb-1 transition-colors duration-300 ${projectType === type.id ? 'text-white' : 'text-ink-primary'}`}>
                                                    {type.label}
                                                </div>
                                                <div className="text-[13px] text-ink-tertiary">{type.desc}</div>
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <hr className="border-border" />

                            {/* Step 2: Budget */}
                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-[20px] font-display font-bold text-white flex items-center gap-3 mb-2">
                                        <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-accent text-sm">2</div>
                                        Wat is je budget indicatie?
                                    </h3>
                                    <p className="text-ink-secondary text-sm ml-11">Dit helpt ons om de best passende oplossing voor te stellen.</p>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {budgets.map((item) => (
                                        <button
                                            key={item.id}
                                            type="button"
                                            onClick={() => setBudget(item.id as Budget)}
                                            className={`p-5 rounded-2xl border text-left transition-all duration-300 ${budget === item.id
                                                ? 'bg-accent/10 border-accent/50 shadow-[0_0_20px_rgba(0,170,255,0.15)] ring-1 ring-accent/30'
                                                : 'bg-white/5 border-white/5 hover:border-white/10 hover:bg-white/10'
                                                }`}
                                        >
                                            <div className={`font-semibold mb-1 transition-colors duration-300 ${budget === item.id ? 'text-white' : 'text-ink-primary'}`}>
                                                {item.label}
                                            </div>
                                            <div className="text-[13px] text-ink-tertiary">{item.desc}</div>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <hr className="border-border" />

                            {/* Step 3: Details */}
                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-[20px] font-display font-bold text-white flex items-center gap-3 mb-2">
                                        <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-accent text-sm">3</div>
                                        Laten we specifiek worden.
                                    </h3>
                                    <p className="text-ink-secondary text-sm ml-11">Laat je gegevens achter en vertel ons kort over je wensen.</p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2 relative">
                                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-ink-tertiary" />
                                        <input
                                            type="text"
                                            required
                                            className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-4 text-white font-sans text-[15px] placeholder:text-ink-tertiary focus:border-accent focus:ring-[1px] focus:ring-accent outline-none transition-all duration-300"
                                            placeholder="Naam *"
                                        />
                                    </div>
                                    <div className="space-y-2 relative">
                                        <Building className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-ink-tertiary" />
                                        <input
                                            type="text"
                                            className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-4 text-white font-sans text-[15px] placeholder:text-ink-tertiary focus:border-accent focus:ring-[1px] focus:ring-accent outline-none transition-all duration-300"
                                            placeholder="Bedrijfsnaam (Optioneel)"
                                        />
                                    </div>
                                    <div className="space-y-2 relative">
                                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-ink-tertiary" />
                                        <input
                                            type="email"
                                            required
                                            className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-4 text-white font-sans text-[15px] placeholder:text-ink-tertiary focus:border-accent focus:ring-[1px] focus:ring-accent outline-none transition-all duration-300"
                                            placeholder="E-mailadres *"
                                        />
                                    </div>
                                    <div className="space-y-2 relative">
                                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-ink-tertiary" />
                                        <input
                                            type="tel"
                                            className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-4 text-white font-sans text-[15px] placeholder:text-ink-tertiary focus:border-accent focus:ring-[1px] focus:ring-accent outline-none transition-all duration-300"
                                            placeholder="Telefoonnummer (Optioneel)"
                                        />
                                    </div>
                                    <div className="space-y-2 md:col-span-2">
                                        <textarea
                                            required
                                            rows={5}
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white font-sans text-[15px] placeholder:text-ink-tertiary focus:border-accent focus:ring-[1px] focus:ring-accent outline-none transition-all duration-300 resize-none"
                                            placeholder="Vertel ons over je project, je wensen, functionaliteiten..."
                                        />
                                    </div>
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={status === 'loading'}
                                className="w-full relative py-5 rounded-xl bg-accent text-white font-sans font-semibold text-[16px] overflow-hidden group transition-all duration-300 hover:shadow-[0_0_25px_rgba(0,170,255,0.4)] hover:scale-[1.01] active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2 mt-8"
                            >
                                {status === 'loading' ? (
                                    <>
                                        <Loader2 className="w-5 h-5 animate-spin" />
                                        <span>Aanvraag verwerken...</span>
                                    </>
                                ) : (
                                    <>
                                        <span>Verstuur Project Aanvraag</span>
                                        <Rocket className="w-5 h-5 ml-1 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                        <div className="absolute inset-0 translate-x-[-100%] group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />
                                    </>
                                )}
                            </button>
                        </motion.form>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
