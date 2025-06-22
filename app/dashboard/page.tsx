import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface DashboardItem {
  id: string;
  title: string;
  value: string;
  description: string;
}

async function DashboardPage() {
  // Fetch the dashboard list from our custom API endpoint
  // Using no-store caching to ensure fresh content
  const res = await fetch('http://localhost:3000/api/dashboard', { cache: 'no-store' });
  const data: DashboardItem[] = await res.json();

  return (
    <div className='p-8'>
      <h1 className='text-3xl font-bold mb-8'>Dashboard</h1>
      
      <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
        {data.map((item) => (
          <Card key={item.id}>
            <CardHeader>
              <CardTitle>{item.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className='text-2xl font-bold'>{item.value}</p>
              <p className='text-muted-foreground'>{item.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default DashboardPage;