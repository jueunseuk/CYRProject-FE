import { formatDate } from '@/util/dateFormatter';
import { ResponsiveCalendar } from '@nivo/calendar'

const CalendarGraph = ({ data, startOfYear, endOfYear }) => (
    <ResponsiveCalendar
        data={data}
        from={startOfYear}
        to={endOfYear}
        emptyColor="#eeeeee"
        margin={{ top: 0, right: 0, bottom: 0, left: 20 }}
        yearSpacing={40}
        monthBorderColor="#ffffff"
        dayBorderWidth={2}
        dayBorderColor="#ffffff"
        tooltip={({ day }) => (
            <div style={{display: "inline-flex", 
                flexDirection: "column", 
                fontSize: "13px", 
                fontWeight: "700", 
                alignItems: "center", 
                backgroundColor: "white", 
                padding: "7px 10px", 
                whiteSpace: "nowrap", 
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)"}}>
                <span>{formatDate(day, 1)} 출석!</span>
            </div>
        )}
        motionConfig={{ mass: 1, tension: 250, friction: 25, clamp: false, precision: 0.01, velocity: 0 }}
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'row',
                translateY: 36,
                itemCount: 4,
                itemWidth: 42,
                itemHeight: 36,
                itemsSpacing: 14,
                itemDirection: 'right-to-left'
            }
        ]}
    />
);

export default CalendarGraph;