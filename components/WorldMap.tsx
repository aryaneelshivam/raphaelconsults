import React, { useMemo } from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import { useTheme } from '../context/ThemeContext';

interface WorldMapProps {
    className?: string;
}

export function WorldMap({ className }: WorldMapProps) {
    const { accentColor } = useTheme();
    const primaryColor = accentColor === 'blue' ? '#3b82f6' : '#f97316';
    const secondaryColor = accentColor === 'blue' ? '#93c5fd' : '#fdba74';

    const MapContent = useMemo(() => (
        <ComposableMap
            projectionConfig={{
                scale: 160, 
                center: [0, 20] 
            }}
            width={800}
            height={600}
            style={{ width: '100%', height: '100%', outline: 'none' }}
        >
            {/* Base Map */}
            <Geographies geography="/features.json">
                {({ geographies }) =>
                    geographies.map((geo) => (
                        <Geography
                            key={geo.rsmKey}
                            geography={geo}
                            // Extremely subtle fill color so it looks like a watermark
                            fill={`${primaryColor}12`} 
                            stroke="none" // Remove hard borders for integration
                            style={{
                                default: { outline: "none", transition: "all 250ms" },
                                hover: { fill: `${primaryColor}20`, outline: "none" },
                                pressed: { outline: "none" },
                            }}
                        />
                    ))
                }
            </Geographies>
        </ComposableMap>
    ), [primaryColor]);

    return (
        <div className={`w-full h-full ${className}`}>
            <div className="absolute inset-0 opacity-100 pointer-events-none" style={{ maskImage: 'radial-gradient(50% 50% at 50% 50%, white 40%, transparent 90%)', WebkitMaskImage: 'radial-gradient(50% 50% at 50% 50%, white 40%, transparent 90%)' }}>
                {MapContent}
            </div>
            
            {/* Glow backing */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-radial from-[var(--rc-background)] to-transparent via-transparent blur-3xl opacity-50" style={{ background: `radial-gradient(circle, ${secondaryColor}22 0%, transparent 70%)` }} />
        </div>
    );
}
