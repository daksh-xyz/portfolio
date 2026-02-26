/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from 'react';

const useBattery = () => {
  const [batteryLevel, setBatteryLevel] = useState<number | null>(null);
  const [isSupported, setIsSupported] = useState(true);
  
  useEffect(() => {
    let battery: any = null;
    
    const initBattery = async () => {
      try {
        // Type assertion since getBattery() isn't in standard types
        const nav = navigator as any;
        
        if (!nav.getBattery) {
          setIsSupported(false);
          return;
        }
        
        battery = await nav.getBattery();
        
        // Set initial level
        setBatteryLevel(battery.level * 20);
        
        // Add event listener
        const handleLevelChange = () => {
          setBatteryLevel(battery.level * 20);
        };
        
        battery.addEventListener('levelchange', handleLevelChange);
        
        // Cleanup function will remove listener
        return () => {
          if (battery) {
            battery.removeEventListener('levelchange', handleLevelChange);
          }
        };
      } catch (error) {
        console.warn('Battery API not supported:', error);
        setIsSupported(false);
      }
    };
    
    const cleanup = initBattery();
    
    // Return cleanup function
    return () => {
      cleanup.then(cleanupFn => cleanupFn?.());
    };
  }, []);
    return { batteryLevel, isSupported };
};

export default useBattery;