import { ResponsiveLine } from '@nivo/line';

const LineGraph = ({data, type}) => {
    return (
        <ResponsiveLine 
            data={data}
            margin={{ top: 10, right: 30, bottom: 50, left: 60 }}
            yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
            curve="cardinal"
            axisBottom={{ legend: '일별 집계', legendOffset: 40 }}
            axisLeft={{ legend: `${type}`, legendOffset: -50 }}
            lineWidth={3}
            lineColor="black"
            pointSize={5}
            pointColor="black"
            pointBorderWidth={2}
            pointBorderColor="black"
            pointLabelYOffset={-12}
            areaBaselineValue={180}
            areaOpacity={0.75}
            // isInteractive={false}
            enableTouchCrosshair={true}
            useMesh={true}
        />
    );
};

export default LineGraph;

