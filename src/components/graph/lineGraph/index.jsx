import { ResponsiveLine } from '@nivo/line';

const LineGraph = ({data, type}) => {

    return (
        <ResponsiveLine 
            data={data}
            margin={{ top: 10, right: 30, bottom: 50, left: 60 }}
            yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
            curve="cardinal"
            axisBottom={{ legend: '날짜', legendOffset: 40 }}
            axisLeft={{ legend: `${type}`, legendOffset: -50 }}
            lineWidth={3}
            lineColor="black"
            pointLabelYOffset={-12}
            areaBaselineValue={180}
            areaOpacity={0.75}
            enableTouchCrosshair={true}
            useMesh={true}
            motionConfig={{ mass: 1, tension: 250, friction: 25, clamp: false, precision: 0.01, velocity: 0 }}
            tooltip={({ point }) => (
                <div style={{display: "flex", flexDirection: "column", fontSize: "15px", fontWeight: "700", alignItems: "center", width: "150px"}}>
                    <span>{point.data.yFormatted}</span>
                </div>
            )}
        />
    );
};

export default LineGraph;

